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
 * The cluster definition.
 */
export interface ClusterDefinition {
  /**
   * The link to the blueprint.
   */
  blueprint?: string;
  /**
   * The type of cluster.
   */
  kind?: string;
  /**
   * The versions of different services in the cluster.
   */
  componentVersion?: { [propertyName: string]: string };
  /**
   * The cluster configurations.
   */
  configurations?: any;
}

/**
 * The security profile which contains Ssh public key for the HDInsight cluster.
 */
export interface SecurityProfile {
  /**
   * The directory type. Possible values include: 'ActiveDirectory'
   */
  directoryType?: string;
  /**
   * The organization's active directory domain.
   */
  domain?: string;
  /**
   * The organizational unit within the Active Directory to place the cluster and service accounts.
   */
  organizationalUnitDN?: string;
  /**
   * The LDAPS protocol URLs to communicate with the Active Directory.
   */
  ldapsUrls?: string[];
  /**
   * The domain user account that will have admin privileges on the cluster.
   */
  domainUsername?: string;
  /**
   * The domain admin password.
   */
  domainUserPassword?: string;
  /**
   * Optional. The Distinguished Names for cluster user groups
   */
  clusterUsersGroupDNs?: string[];
  /**
   * The resource ID of the user's Azure Active Directory Domain Service.
   */
  aaddsResourceId?: string;
  /**
   * User assigned identity that has permissions to read and create cluster-related artifacts in
   * the user's AADDS.
   */
  msiResourceId?: string;
}

/**
 * The hardware profile.
 */
export interface HardwareProfile {
  /**
   * The size of the VM
   */
  vmSize?: string;
}

/**
 * The virtual network properties.
 */
export interface VirtualNetworkProfile {
  /**
   * The ID of the virtual network.
   */
  id?: string;
  /**
   * The name of the subnet.
   */
  subnet?: string;
}

/**
 * The data disks groups for the role.
 */
export interface DataDisksGroups {
  /**
   * The number of disks per node.
   */
  disksPerNode?: number;
  /**
   * ReadOnly. The storage account type. Do not set this value.
   */
  readonly storageAccountType?: string;
  /**
   * ReadOnly. The DiskSize in GB. Do not set this value.
   */
  readonly diskSizeGB?: number;
}

/**
 * The SSH public key for the cluster nodes.
 */
export interface SshPublicKey {
  /**
   * The certificate for SSH.
   */
  certificateData?: string;
}

/**
 * The list of SSH public keys.
 */
export interface SshProfile {
  /**
   * The list of SSH public keys.
   */
  publicKeys?: SshPublicKey[];
}

/**
 * The ssh username, password, and ssh public key.
 */
export interface LinuxOperatingSystemProfile {
  /**
   * The username.
   */
  username?: string;
  /**
   * The password.
   */
  password?: string;
  /**
   * The SSH profile.
   */
  sshProfile?: SshProfile;
}

/**
 * The Linux operation systems profile.
 */
export interface OsProfile {
  /**
   * The Linux OS profile.
   */
  linuxOperatingSystemProfile?: LinuxOperatingSystemProfile;
}

/**
 * Describes a script action on role on the cluster.
 */
export interface ScriptAction {
  /**
   * The name of the script action.
   */
  name: string;
  /**
   * The URI to the script.
   */
  uri: string;
  /**
   * The parameters for the script provided.
   */
  parameters: string;
}

/**
 * Describes a role on the cluster.
 */
export interface Role {
  /**
   * The name of the role.
   */
  name?: string;
  /**
   * The minimum instance count of the cluster.
   */
  minInstanceCount?: number;
  /**
   * The instance count of the cluster.
   */
  targetInstanceCount?: number;
  /**
   * The hardware profile.
   */
  hardwareProfile?: HardwareProfile;
  /**
   * The operating system profile.
   */
  osProfile?: OsProfile;
  /**
   * The virtual network profile.
   */
  virtualNetworkProfile?: VirtualNetworkProfile;
  /**
   * The data disks groups for the role.
   */
  dataDisksGroups?: DataDisksGroups[];
  /**
   * The list of script actions on the role.
   */
  scriptActions?: ScriptAction[];
}

/**
 * Describes the compute profile.
 */
export interface ComputeProfile {
  /**
   * The list of roles in the cluster.
   */
  roles?: Role[];
}

/**
 * The storage Account.
 */
export interface StorageAccount {
  /**
   * The name of the storage account.
   */
  name?: string;
  /**
   * Whether or not the storage account is the default storage account.
   */
  isDefault?: boolean;
  /**
   * The container in the storage account, only to be specified for WASB storage accounts.
   */
  container?: string;
  /**
   * The filesystem, only to be specified for Azure Data Lake Storage type Gen 2.
   */
  fileSystem?: string;
  /**
   * The storage account access key.
   */
  key?: string;
}

/**
 * The storage profile.
 */
export interface StorageProfile {
  /**
   * The list of storage accounts in the cluster.
   */
  storageaccounts?: StorageAccount[];
}

/**
 * The disk encryption properties
 */
export interface DiskEncryptionProperties {
  /**
   * Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net
   */
  vaultUri?: string;
  /**
   * Key name that is used for enabling disk encryption.
   */
  keyName?: string;
  /**
   * Specific key version that is used for enabling disk encryption.
   */
  keyVersion?: string;
  /**
   * Algorithm identifier for encryption, default RSA-OAEP. Possible values include: 'RSA-OAEP',
   * 'RSA-OAEP-256', 'RSA1_5'
   */
  encryptionAlgorithm?: string;
  /**
   * Resource ID of Managed Identity that is used to access the key vault.
   */
  msiResourceId?: string;
}

/**
 * The cluster create parameters.
 */
export interface ClusterCreateProperties {
  /**
   * The version of the cluster.
   */
  clusterVersion?: string;
  /**
   * The type of operating system. Possible values include: 'Windows', 'Linux'
   */
  osType?: string;
  /**
   * The cluster tier. Possible values include: 'Standard', 'Premium'
   */
  tier?: string;
  /**
   * The cluster definition.
   */
  clusterDefinition?: ClusterDefinition;
  /**
   * The security profile.
   */
  securityProfile?: SecurityProfile;
  /**
   * The compute profile.
   */
  computeProfile?: ComputeProfile;
  /**
   * The storage profile.
   */
  storageProfile?: StorageProfile;
  /**
   * The disk encryption properties.
   */
  diskEncryptionProperties?: DiskEncryptionProperties;
}

export interface ClusterIdentityUserAssignedIdentitiesValue {
  /**
   * The principal id of user assigned identity.
  */
  readonly principalId?: string;
  /**
   * The client id of user assigned identity.
  */
  readonly clientId?: string;
}

/**
 * Identity for the cluster.
*/
export interface ClusterIdentity {
  /**
   * The principal id of cluster identity. This property will only be provided for a system
   * assigned identity.
  */
  readonly principalId?: string;
  /**
   * The tenant id associated with the cluster. This property will only be provided for a system
   * assigned identity.
  */
  readonly tenantId?: string;
  /**
   * The type of identity used for the cluster. The type 'SystemAssigned, UserAssigned' includes
   * both an implicitly created identity and a set of user assigned identities. Possible values
   * include: 'SystemAssigned', 'UserAssigned', 'SystemAssigned, UserAssigned', 'None'
  */
  type?: string;
  /**
   * The list of user identities associated with the cluster. The user identity dictionary key
   * references will be ARM resource ids in the form:
   * '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.
  */
  userAssignedIdentities?: { [propertyName: string]: ClusterIdentityUserAssignedIdentitiesValue };
}

/**
 * The CreateCluster request parameters.
*/
export interface ClusterCreateParametersExtended {
  /**
   * The location of the cluster.
  */
  location?: string;
  /**
   * The resource tags.
  */
  tags?: { [propertyName: string]: string };
  /**
   * The cluster create parameters.
  */
  properties?: ClusterCreateProperties;
  /**
   * The identity of the cluster, if configured.
  */
  identity?: ClusterIdentity;
}

/**
 * The PatchCluster request parameters
*/
export interface ClusterPatchParameters {
  /**
   * The resource tags.
  */
  tags?: { [propertyName: string]: string };
}

/**
 * The quota properties for the cluster.
*/
export interface QuotaInfo {
  /**
   * The cores used by the cluster.
  */
  coresUsed?: number;
}

/**
 * The error message associated with the cluster creation.
*/
export interface Errors {
  /**
   * The error code.
  */
  code?: string;
  /**
   * The error message.
  */
  message?: string;
}

/**
 * The connectivity properties
*/
export interface ConnectivityEndpoint {
  /**
   * The name of the endpoint.
  */
  name?: string;
  /**
   * The protocol of the endpoint.
  */
  protocol?: string;
  /**
   * The location of the endpoint.
  */
  location?: string;
  /**
   * The port to connect to.
  */
  port?: number;
}

/**
 * The properties of cluster.
*/
export interface ClusterGetProperties {
  /**
   * The version of the cluster.
  */
  clusterVersion?: string;
  /**
   * The type of operating system. Possible values include: 'Windows', 'Linux'
  */
  osType?: string;
  /**
   * The cluster tier. Possible values include: 'Standard', 'Premium'
  */
  tier?: string;
  /**
   * The cluster definition.
  */
  clusterDefinition: ClusterDefinition;
  /**
   * The security profile.
  */
  securityProfile?: SecurityProfile;
  /**
   * The compute profile.
  */
  computeProfile?: ComputeProfile;
  /**
   * The provisioning state, which only appears in the response. Possible values include:
   * 'InProgress', 'Failed', 'Succeeded', 'Canceled', 'Deleting'
  */
  provisioningState?: string;
  /**
   * The date on which the cluster was created.
  */
  createdDate?: string;
  /**
   * The state of the cluster.
  */
  clusterState?: string;
  /**
   * The quota information.
  */
  quotaInfo?: QuotaInfo;
  /**
   * The list of errors.
  */
  errors?: Errors[];
  /**
   * The list of connectivity endpoints.
  */
  connectivityEndpoints?: ConnectivityEndpoint[];
  /**
   * The disk encryption properties.
  */
  diskEncryptionProperties?: DiskEncryptionProperties;
}

/**
 * The core properties of ARM resources
*/
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource.
  */
  readonly id?: string;
  /**
   * The name of the resource
  */
  readonly name?: string;
  /**
   * The type of the resource.
  */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM tracked top level resource
*/
export interface TrackedResource extends Resource {
  /**
   * The Azure Region where the resource lives
  */
  location?: string;
  /**
   * Resource tags.
  */
  tags?: { [propertyName: string]: string };
}

/**
 * The HDInsight cluster.
*/
export interface Cluster extends TrackedResource {
  /**
   * The ETag for the resource
  */
  etag?: string;
  /**
   * The properties of the cluster.
  */
  properties?: ClusterGetProperties;
  /**
   * The identity of the cluster, if configured.
  */
  identity?: ClusterIdentity;
}

/**
 * Describes a script action on a running cluster.
*/
export interface RuntimeScriptAction {
  /**
   * The name of the script action.
  */
  name: string;
  /**
   * The URI to the script.
  */
  uri: string;
  /**
   * The parameters for the script
  */
  parameters?: string;
  /**
   * The list of roles where script will be executed.
  */
  roles: string[];
  /**
   * The application name of the script action, if any.
  */
  readonly applicationName?: string;
}

/**
 * The parameters for the script actions to execute on a running cluster.
*/
export interface ExecuteScriptActionParameters {
  /**
   * The list of run time script actions.
  */
  scriptActions?: RuntimeScriptAction[];
  /**
   * Gets or sets if the scripts needs to be persisted.
  */
  persistOnSuccess: boolean;
}

/**
 * The ListPersistedScriptActions operation response.
*/
export interface ClusterListPersistedScriptActionsResult {
  /**
   * The list of Persisted Script Actions.
  */
  value?: RuntimeScriptAction[];
  /**
   * The link (url) to the next page of results.
  */
  readonly nextLink?: string;
}

/**
 * The execution summary of a script action.
*/
export interface ScriptActionExecutionSummary {
  /**
   * The status of script action execution.
  */
  readonly status?: string;
  /**
   * The instance count for a given script action execution status.
  */
  readonly instanceCount?: number;
}

/**
 * The execution details of a script action.
*/
export interface RuntimeScriptActionDetail extends RuntimeScriptAction {
  /**
   * The execution id of the script action.
  */
  readonly scriptExecutionId?: number;
  /**
   * The start time of script action execution.
  */
  readonly startTime?: string;
  /**
   * The end time of script action execution.
  */
  readonly endTime?: string;
  /**
   * The current execution status of the script action.
  */
  readonly status?: string;
  /**
   * The reason why the script action was executed.
  */
  readonly operation?: string;
  /**
   * The summary of script action execution result.
  */
  readonly executionSummary?: ScriptActionExecutionSummary[];
  /**
   * The script action execution debug information.
  */
  readonly debugInformation?: string;
}

/**
 * The list runtime script action detail response.
*/
export interface ClusterListRuntimeScriptActionDetailResult {
  /**
   * The list of persisted script action details for the cluster.
  */
  readonly value?: RuntimeScriptActionDetail[];
  /**
   * The link (url) to the next page of results.
  */
  readonly nextLink?: string;
}

/**
 * The Resize Cluster request parameters.
*/
export interface ClusterResizeParameters {
  /**
   * The target instance count for the operation.
  */
  targetInstanceCount?: number;
}

/**
 * The Disk Encryption Cluster request parameters.
*/
export interface ClusterDiskEncryptionParameters {
  /**
   * Base key vault URI where the customers key is located eg. https://myvault.vault.azure.net
  */
  vaultUri?: string;
  /**
   * Key name that is used for enabling disk encryption.
  */
  keyName?: string;
  /**
   * Specific key version that is used for enabling disk encryption.
  */
  keyVersion?: string;
}

/**
 * The azure async operation response.
*/
export interface OperationResource {
  /**
   * The async operation state. Possible values include: 'InProgress', 'Succeeded', 'Failed'
  */
  status?: string;
  /**
   * The operation error information.
  */
  error?: Errors;
}

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than
 * required location and tags
*/
export interface ProxyResource extends Resource {
}

/**
 * Describes the format of Error response.
*/
export interface ErrorResponse {
  /**
   * Error code
  */
  code?: string;
  /**
   * Error message indicating why the operation failed.
  */
  message?: string;
}

/**
 * Gets the application HTTP endpoints.
*/
export interface ApplicationGetHttpsEndpoint {
  /**
   * The list of access modes for the application.
  */
  accessModes?: string[];
  /**
   * The location of the endpoint.
  */
  location?: string;
  /**
   * The destination port to connect to.
  */
  destinationPort?: number;
  /**
   * The public port to connect to.
  */
  publicPort?: number;
}

/**
 * Gets the application SSH endpoint
*/
export interface ApplicationGetEndpoint {
  /**
   * The location of the endpoint.
  */
  location?: string;
  /**
   * The destination port to connect to.
  */
  destinationPort?: number;
  /**
   * The public port to connect to.
  */
  publicPort?: number;
}

/**
 * The HDInsight cluster application GET response.
*/
export interface ApplicationProperties {
  /**
   * The list of roles in the cluster.
  */
  computeProfile?: ComputeProfile;
  /**
   * The list of install script actions.
  */
  installScriptActions?: RuntimeScriptAction[];
  /**
   * The list of uninstall script actions.
  */
  uninstallScriptActions?: RuntimeScriptAction[];
  /**
   * The list of application HTTPS endpoints.
  */
  httpsEndpoints?: ApplicationGetHttpsEndpoint[];
  /**
   * The list of application SSH endpoints.
  */
  sshEndpoints?: ApplicationGetEndpoint[];
  /**
   * The provisioning state of the application.
  */
  readonly provisioningState?: string;
  /**
   * The application type.
  */
  applicationType?: string;
  /**
   * The application state.
  */
  readonly applicationState?: string;
  /**
   * The list of errors.
  */
  errors?: Errors[];
  /**
   * The application create date time.
  */
  readonly createdDate?: string;
  /**
   * The marketplace identifier.
  */
  readonly marketplaceIdentifier?: string;
}

/**
 * The HDInsight cluster application
*/
export interface Application extends ProxyResource {
  /**
   * The ETag for the application
  */
  etag?: string;
  /**
   * The tags for the application.
  */
  tags?: { [propertyName: string]: string };
  /**
   * The properties of the application.
  */
  properties?: ApplicationProperties;
}

/**
 * The details about the localizable name of a type of usage.
*/
export interface LocalizedName {
  /**
   * The name of the used resource.
  */
  value?: string;
  /**
   * The localized name of the used resource.
  */
  localizedValue?: string;
}

/**
 * The details about the usage of a particular limited resource.
*/
export interface Usage {
  /**
   * The type of measurement for usage.
  */
  unit?: string;
  /**
   * The current usage.
  */
  currentValue?: number;
  /**
   * The maximum allowed usage.
  */
  limit?: number;
  /**
   * The details about the localizable name of the used resource.
  */
  name?: LocalizedName;
}

/**
 * The response for the operation to get regional usages for a subscription.
*/
export interface UsagesListResult {
  /**
   * The list of usages.
  */
  value?: Usage[];
}

/**
 * Cluster monitoring extensions
*/
export interface Extension {
  /**
   * The workspace ID for the cluster monitoring extension.
  */
  workspaceId?: string;
  /**
   * The certificate for the cluster monitoring extensions.
  */
  primaryKey?: string;
}

/**
 * The Operations Management Suite (OMS) status response
*/
export interface ClusterMonitoringResponse {
  /**
   * The status of the Operations Management Suite (OMS) on the HDInsight cluster.
  */
  clusterMonitoringEnabled?: boolean;
  /**
   * The workspace ID of the Operations Management Suite (OMS) on the HDInsight cluster.
  */
  workspaceId?: string;
}

/**
 * The Operations Management Suite (OMS) parameters.
*/
export interface ClusterMonitoringRequest {
  /**
   * The Operations Management Suite (OMS) workspace ID.
  */
  workspaceId?: string;
  /**
   * The Operations Management Suite (OMS) workspace key.
  */
  primaryKey?: string;
}

/**
 * The persisted script action for cluster.
*/
export interface ScriptActionPersistedGetResponseSpec {
  /**
   * The name of script action.
  */
  name?: string;
  /**
   * The URI to the script.
  */
  uri?: string;
  /**
   * The parameters for the script provided.
  */
  parameters?: string;
  /**
   * The list of roles where script will be executed.
  */
  roles?: string[];
  /**
   * The application name for the script action.
  */
  applicationName?: string;
}

/**
 * The object that represents the operation.
*/
export interface OperationDisplay {
  /**
   * The service provider: Microsoft.HDInsight
  */
  provider?: string;
  /**
   * The resource on which the operation is performed: Cluster, Applications, etc.
  */
  resource?: string;
  /**
   * The operation type: read, write, delete, etc.
  */
  operation?: string;
}

/**
 * The HDInsight REST API operation.
*/
export interface Operation {
  /**
   * The operation name: {provider}/{resource}/{operation}
  */
  name?: string;
  /**
   * The object that represents the operation.
  */
  display?: OperationDisplay;
}

/**
 * The List Cluster operation response.
*/
export interface ClusterListResult extends Array<Cluster> {
  /**
   * The link (url) to the next page of results.
  */
  readonly nextLink?: string;
}

/**
 * Result of the request to list cluster Applications. It contains a list of operations and a URL
 * link to get the next set of results.
*/
export interface ApplicationListResult extends Array<Application> {
  /**
   * The URL to get the next set of operation list results if there are any.
  */
  readonly nextLink?: string;
}

/**
 * The persisted script action for the cluster.
*/
export interface ScriptActionsList extends Array<RuntimeScriptActionDetail> {
  /**
   * The link (url) to the next page of results.
  */
  readonly nextLink?: string;
}

/**
 * The list script execution history response.
*/
export interface ScriptActionExecutionHistoryList extends Array<RuntimeScriptActionDetail> {
  /**
   * The link (url) to the next page of results.
  */
  readonly nextLink?: string;
}

/**
 * Result of the request to list HDInsight operations. It contains a list of operations and a URL
 * link to get the next set of results.
*/
export interface OperationListResult extends Array<Operation> {
  /**
   * The URL to get the next set of operation list results if there are any.
  */
  nextLink?: string;
}
