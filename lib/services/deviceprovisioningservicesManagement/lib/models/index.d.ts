/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Error response containing message and code.
 */
export interface ErrorMesssage {
  /**
   * standard error code
   */
  code?: string;
  /**
   * standard error description
   */
  message?: string;
  /**
   * detailed summary of error
   */
  details?: string;
}

/**
 * Result of a long running operation.
 */
export interface AsyncOperationResult {
  /**
   * current status of a long running operation.
   */
  status?: string;
  /**
   * Error message containing code, description and details
   */
  error?: ErrorMesssage;
}

/**
 * The description of an X509 CA Certificate.
 */
export interface CertificateProperties {
  /**
   * The certificate's subject name.
   */
  readonly subject?: string;
  /**
   * The certificate's expiration date and time.
   */
  readonly expiry?: Date;
  /**
   * The certificate's thumbprint.
   */
  readonly thumbprint?: string;
  /**
   * Determines whether certificate has been verified.
   */
  readonly isVerified?: boolean;
  /**
   * The certificate's creation date and time.
   */
  readonly created?: Date;
  /**
   * The certificate's last update date and time.
   */
  readonly updated?: Date;
}

/**
 * The X509 Certificate.
 */
export interface CertificateResponse extends BaseResource {
  /**
   * properties of a certificate
   */
  properties?: CertificateProperties;
  /**
   * The resource identifier.
   */
  readonly id?: string;
  /**
   * The name of the certificate.
   */
  readonly name?: string;
  /**
   * The entity tag.
   */
  readonly etag?: string;
  /**
   * The resource type.
   */
  readonly type?: string;
}

/**
 * The JSON-serialized array of Certificate objects.
 */
export interface CertificateListDescription {
  /**
   * The array of Certificate objects.
   */
  value?: CertificateResponse[];
}

/**
 * The JSON-serialized X509 Certificate.
 */
export interface CertificateBodyDescription {
  /**
   * Base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
   */
  certificate?: string;
}

/**
 * List of possible provisioning service SKUs.
 */
export interface IotDpsSkuInfo {
  /**
   * Sku name. Possible values include: 'S1'
   */
  name?: string;
  /**
   * Pricing tier name of the provisioning service.
   */
  readonly tier?: string;
  /**
   * The number of units to provision
   */
  capacity?: number;
}

/**
 * Description of the IoT hub.
 */
export interface IotHubDefinitionDescription {
  /**
   * flag for applying allocationPolicy or not for a given iot hub.
   */
  applyAllocationPolicy?: boolean;
  /**
   * weight to apply for a given iot h.
   */
  allocationWeight?: number;
  /**
   * Host name of the IoT hub.
   */
  readonly name?: string;
  /**
   * Connection string og the IoT hub.
   */
  connectionString: string;
  /**
   * ARM region of the IoT hub.
   */
  location: string;
}

/**
 * Description of the shared access key.
 */
export interface SharedAccessSignatureAuthorizationRuleAccessRightsDescription {
  /**
   * Name of the key.
   */
  keyName: string;
  /**
   * Primary SAS key value.
   */
  primaryKey?: string;
  /**
   * Secondary SAS key value.
   */
  secondaryKey?: string;
  /**
   * Rights that this key has. Possible values include: 'ServiceConfig', 'EnrollmentRead',
   * 'EnrollmentWrite', 'DeviceConnect', 'RegistrationStatusRead', 'RegistrationStatusWrite'
   */
  rights: string;
}

/**
 * the service specific properties of a provisioning service, including keys, linked iot hubs,
 * current state, and system generated properties such as hostname and idScope
 */
export interface IotDpsPropertiesDescription {
  /**
   * Current state of the provisioning service. Possible values include: 'Activating', 'Active',
   * 'Deleting', 'Deleted', 'ActivationFailed', 'DeletionFailed', 'Transitioning', 'Suspending',
   * 'Suspended', 'Resuming', 'FailingOver', 'FailoverFailed'
   */
  state?: string;
  /**
   * The ARM provisioning state of the provisioning service.
   */
  provisioningState?: string;
  /**
   * List of IoT hubs associated with this provisioning service.
   */
  iotHubs?: IotHubDefinitionDescription[];
  /**
   * Allocation policy to be used by this provisioning service. Possible values include: 'Hashed',
   * 'GeoLatency', 'Static'
   */
  allocationPolicy?: string;
  /**
   * Service endpoint for provisioning service.
   */
  readonly serviceOperationsHostName?: string;
  /**
   * Device endpoint for this provisioning service.
   */
  readonly deviceProvisioningHostName?: string;
  /**
   * Unique identifier of this provisioning service.
   */
  readonly idScope?: string;
  /**
   * List of authorization keys for a provisioning service.
   */
  authorizationPolicies?: SharedAccessSignatureAuthorizationRuleAccessRightsDescription[];
}

/**
 * The common properties of an Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * The resource identifier.
   */
  readonly id?: string;
  /**
   * The resource name.
   */
  readonly name?: string;
  /**
   * The resource type.
   */
  readonly type?: string;
  /**
   * The resource location.
   */
  location: string;
  /**
   * The resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The description of the provisioning service.
 */
export interface ProvisioningServiceDescription extends Resource {
  /**
   * The Etag field is *not* required. If it is provided in the response body, it must also be
   * provided as a header per the normal ETag convention.
   */
  etag?: string;
  /**
   * Service specific properties for a provisioning service
   */
  properties: IotDpsPropertiesDescription;
  /**
   * Sku info for a provisioning Service.
   */
  sku: IotDpsSkuInfo;
}

/**
 * The object that represents the operation.
 */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft Devices.
   */
  readonly provider?: string;
  /**
   * Resource Type: ProvisioningServices.
   */
  readonly resource?: string;
  /**
   * Name of the operation.
   */
  readonly operation?: string;
}

/**
 * IoT Hub REST API operation.
 */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{read | write | action | delete}
   */
  readonly name?: string;
  /**
   * The object that represents the operation.
   */
  display?: OperationDisplay;
}

/**
 * Error details.
 */
export interface ErrorDetails {
  /**
   * The error code.
   */
  readonly code?: string;
  /**
   * The HTTP status code.
   */
  readonly httpStatusCode?: string;
  /**
   * The error message.
   */
  readonly message?: string;
  /**
   * The error details.
   */
  readonly details?: string;
}

/**
 * Available SKUs of tier and units.
 */
export interface IotDpsSkuDefinition {
  /**
   * Sku name. Possible values include: 'S1'
   */
  name?: string;
}

/**
 * Input values for operation results call.
 */
export interface OperationInputs {
  /**
   * The name of the Provisioning Service to check.
   */
  name: string;
}

/**
 * Description of name availability.
 */
export interface NameAvailabilityInfo {
  /**
   * specifies if a name is available or not
   */
  nameAvailable?: boolean;
  /**
   * specifies the reason a name is unavailable. Possible values include: 'Invalid',
   * 'AlreadyExists'
   */
  reason?: string;
  /**
   * message containing a detailed reason name is unavailable
   */
  message?: string;
}

/**
 * A container holding only the Tags for a resource, allowing the user to update the tags on a
 * Provisioning Service instance.
 */
export interface TagsResource {
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
}

export interface VerificationCodeResponseProperties {
  /**
   * Verification code.
  */
  verificationCode?: string;
  /**
   * Certificate subject.
  */
  subject?: string;
  /**
   * Code expiry.
  */
  expiry?: string;
  /**
   * Certificate thumbprint.
  */
  thumbprint?: string;
  /**
   * Indicate if the certificate is verified by owner of private key.
  */
  isVerified?: boolean;
  /**
   * Certificate created time.
  */
  created?: string;
  /**
   * Certificate updated time.
  */
  updated?: string;
}

/**
 * Description of the response of the verification code.
*/
export interface VerificationCodeResponse extends BaseResource {
  /**
   * Name of certificate.
  */
  readonly name?: string;
  /**
   * Request etag.
  */
  readonly etag?: string;
  /**
   * The resource identifier.
  */
  readonly id?: string;
  /**
   * The resource type.
  */
  readonly type?: string;
  properties?: VerificationCodeResponseProperties;
}

/**
 * The JSON-serialized leaf certificate
*/
export interface VerificationCodeRequest {
  /**
   * base-64 representation of X509 certificate .cer file or just .pem file content.
  */
  certificate?: string;
}

/**
 * Result of the request to list IoT Hub operations. It contains a list of operations and a URL
 * link to get the next set of results.
*/
export interface OperationListResult extends Array<Operation> {
  /**
   * URL to get the next set of operation list results if there are any.
  */
  readonly nextLink?: string;
}

/**
 * List of provisioning service descriptions.
*/
export interface ProvisioningServiceDescriptionListResult extends
Array<ProvisioningServiceDescription> {
  /**
   * the next link
  */
  readonly nextLink?: string;
}

/**
 * List of available SKUs.
*/
export interface IotDpsSkuDefinitionListResult extends Array<IotDpsSkuDefinition> {
  /**
   * The next link.
  */
  readonly nextLink?: string;
}

/**
 * List of shared access keys.
*/
export interface SharedAccessSignatureAuthorizationRuleListResult extends
Array<SharedAccessSignatureAuthorizationRuleAccessRightsDescription> {
  /**
   * The next link.
  */
  readonly nextLink?: string;
}
