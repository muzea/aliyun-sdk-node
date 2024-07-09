import { CreateDesktopsRequest } from "./CreateDesktops/req";
import { CreateDesktopsResponse } from "./CreateDesktops/res";
import { DescribeDesktopsRequest } from "./DescribeDesktops/req";
import { DescribeDesktopsResponse } from "./DescribeDesktops/res";
import { DescribeDesktopTypesRequest } from "./DescribeDesktopTypes/req";
import { DescribeDesktopTypesResponse } from "./DescribeDesktopTypes/res";
import { RebootDesktopsRequest } from "./RebootDesktops/req";
import { RebootDesktopsResponse } from "./RebootDesktops/res";
import { StartDesktopsRequest } from "./StartDesktops/req";
import { StartDesktopsResponse } from "./StartDesktops/res";
import { StopDesktopsRequest } from "./StopDesktops/req";
import { StopDesktopsResponse } from "./StopDesktops/res";
import { RebuildDesktopsRequest } from "./RebuildDesktops/req";
import { RebuildDesktopsResponse } from "./RebuildDesktops/res";
import { ModifyDesktopSpecRequest } from "./ModifyDesktopSpec/req";
import { ModifyDesktopSpecResponse } from "./ModifyDesktopSpec/res";
import { ModifyDesktopNameRequest } from "./ModifyDesktopName/req";
import { ModifyDesktopNameResponse } from "./ModifyDesktopName/res";
import { ModifyEntitlementRequest } from "./ModifyEntitlement/req";
import { ModifyEntitlementResponse } from "./ModifyEntitlement/res";
import { ModifyUserEntitlementRequest } from "./ModifyUserEntitlement/req";
import { ModifyUserEntitlementResponse } from "./ModifyUserEntitlement/res";
import { ModifyDesktopChargeTypeRequest } from "./ModifyDesktopChargeType/req";
import { ModifyDesktopChargeTypeResponse } from "./ModifyDesktopChargeType/res";
import { ModifyDesktopHostNameRequest } from "./ModifyDesktopHostName/req";
import { ModifyDesktopHostNameResponse } from "./ModifyDesktopHostName/res";
import { RenewDesktopsRequest } from "./RenewDesktops/req";
import { RenewDesktopsResponse } from "./RenewDesktops/res";
import { DeleteDesktopsRequest } from "./DeleteDesktops/req";
import { DeleteDesktopsResponse } from "./DeleteDesktops/res";
import { ExportDesktopListInfoRequest } from "./ExportDesktopListInfo/req";
import { ExportDesktopListInfoResponse } from "./ExportDesktopListInfo/res";
import { CreateRAMDirectoryRequest } from "./CreateRAMDirectory/req";
import { CreateRAMDirectoryResponse } from "./CreateRAMDirectory/res";
import { CreateADConnectorDirectoryRequest } from "./CreateADConnectorDirectory/req";
import { CreateADConnectorDirectoryResponse } from "./CreateADConnectorDirectory/res";
import { ModifyADConnectorDirectoryRequest } from "./ModifyADConnectorDirectory/req";
import { ModifyADConnectorDirectoryResponse } from "./ModifyADConnectorDirectory/res";
import { DescribeDirectoriesRequest } from "./DescribeDirectories/req";
import { DescribeDirectoriesResponse } from "./DescribeDirectories/res";
import { DeleteDirectoriesRequest } from "./DeleteDirectories/req";
import { DeleteDirectoriesResponse } from "./DeleteDirectories/res";
import { CreateSimpleOfficeSiteRequest } from "./CreateSimpleOfficeSite/req";
import { CreateSimpleOfficeSiteResponse } from "./CreateSimpleOfficeSite/res";
import { CreateADConnectorOfficeSiteRequest } from "./CreateADConnectorOfficeSite/req";
import { CreateADConnectorOfficeSiteResponse } from "./CreateADConnectorOfficeSite/res";
import { ConfigADConnectorTrustRequest } from "./ConfigADConnectorTrust/req";
import { ConfigADConnectorTrustResponse } from "./ConfigADConnectorTrust/res";
import { ListUserAdOrganizationUnitsRequest } from "./ListUserAdOrganizationUnits/req";
import { ListUserAdOrganizationUnitsResponse } from "./ListUserAdOrganizationUnits/res";
import { ConfigADConnectorUserRequest } from "./ConfigADConnectorUser/req";
import { ConfigADConnectorUserResponse } from "./ConfigADConnectorUser/res";
import { ModifyADConnectorOfficeSiteRequest } from "./ModifyADConnectorOfficeSite/req";
import { ModifyADConnectorOfficeSiteResponse } from "./ModifyADConnectorOfficeSite/res";
import { ModifyOfficeSiteCrossDesktopAccessRequest } from "./ModifyOfficeSiteCrossDesktopAccess/req";
import { ModifyOfficeSiteCrossDesktopAccessResponse } from "./ModifyOfficeSiteCrossDesktopAccess/res";
import { ModifyOfficeSiteAttributeRequest } from "./ModifyOfficeSiteAttribute/req";
import { ModifyOfficeSiteAttributeResponse } from "./ModifyOfficeSiteAttribute/res";
import { ModifyOfficeSiteMfaEnabledRequest } from "./ModifyOfficeSiteMfaEnabled/req";
import { ModifyOfficeSiteMfaEnabledResponse } from "./ModifyOfficeSiteMfaEnabled/res";
import { ListOfficeSiteOverviewRequest } from "./ListOfficeSiteOverview/req";
import { ListOfficeSiteOverviewResponse } from "./ListOfficeSiteOverview/res";
import { DescribeOfficeSitesRequest } from "./DescribeOfficeSites/req";
import { DescribeOfficeSitesResponse } from "./DescribeOfficeSites/res";
import { ActivateOfficeSiteRequest } from "./ActivateOfficeSite/req";
import { ActivateOfficeSiteResponse } from "./ActivateOfficeSite/res";
import { DeleteOfficeSitesRequest } from "./DeleteOfficeSites/req";
import { DeleteOfficeSitesResponse } from "./DeleteOfficeSites/res";
import { ListOfficeSiteUsersRequest } from "./ListOfficeSiteUsers/req";
import { ListOfficeSiteUsersResponse } from "./ListOfficeSiteUsers/res";
import { ListDirectoryUsersRequest } from "./ListDirectoryUsers/req";
import { ListDirectoryUsersResponse } from "./ListDirectoryUsers/res";
import { DescribeVirtualMFADevicesRequest } from "./DescribeVirtualMFADevices/req";
import { DescribeVirtualMFADevicesResponse } from "./DescribeVirtualMFADevices/res";
import { LockVirtualMFADeviceRequest } from "./LockVirtualMFADevice/req";
import { LockVirtualMFADeviceResponse } from "./LockVirtualMFADevice/res";
import { UnlockVirtualMFADeviceRequest } from "./UnlockVirtualMFADevice/req";
import { UnlockVirtualMFADeviceResponse } from "./UnlockVirtualMFADevice/res";
import { DeleteVirtualMFADeviceRequest } from "./DeleteVirtualMFADevice/req";
import { DeleteVirtualMFADeviceResponse } from "./DeleteVirtualMFADevice/res";
import { CreatePolicyGroupRequest } from "./CreatePolicyGroup/req";
import { CreatePolicyGroupResponse } from "./CreatePolicyGroup/res";
import { DescribePolicyGroupsRequest } from "./DescribePolicyGroups/req";
import { DescribePolicyGroupsResponse } from "./DescribePolicyGroups/res";
import { ModifyDesktopsPolicyGroupRequest } from "./ModifyDesktopsPolicyGroup/req";
import { ModifyDesktopsPolicyGroupResponse } from "./ModifyDesktopsPolicyGroup/res";
import { ModifyPolicyGroupRequest } from "./ModifyPolicyGroup/req";
import { ModifyPolicyGroupResponse } from "./ModifyPolicyGroup/res";
import { ClonePolicyGroupRequest } from "./ClonePolicyGroup/req";
import { ClonePolicyGroupResponse } from "./ClonePolicyGroup/res";
import { DeletePolicyGroupsRequest } from "./DeletePolicyGroups/req";
import { DeletePolicyGroupsResponse } from "./DeletePolicyGroups/res";
import { CreateImageRequest } from "./CreateImage/req";
import { CreateImageResponse } from "./CreateImage/res";
import { DescribeImagesRequest } from "./DescribeImages/req";
import { DescribeImagesResponse } from "./DescribeImages/res";
import { ModifyImageAttributeRequest } from "./ModifyImageAttribute/req";
import { ModifyImageAttributeResponse } from "./ModifyImageAttribute/res";
import { DeleteImagesRequest } from "./DeleteImages/req";
import { DeleteImagesResponse } from "./DeleteImages/res";
import { CreateBundleRequest } from "./CreateBundle/req";
import { CreateBundleResponse } from "./CreateBundle/res";
import { DescribeBundlesRequest } from "./DescribeBundles/req";
import { DescribeBundlesResponse } from "./DescribeBundles/res";
import { ModifyBundleRequest } from "./ModifyBundle/req";
import { ModifyBundleResponse } from "./ModifyBundle/res";
import { DeleteBundlesRequest } from "./DeleteBundles/req";
import { DeleteBundlesResponse } from "./DeleteBundles/res";
import { CreateNetworkPackageRequest } from "./CreateNetworkPackage/req";
import { CreateNetworkPackageResponse } from "./CreateNetworkPackage/res";
import { DescribeNetworkPackagesRequest } from "./DescribeNetworkPackages/req";
import { DescribeNetworkPackagesResponse } from "./DescribeNetworkPackages/res";
import { ModifyNetworkPackageEnabledRequest } from "./ModifyNetworkPackageEnabled/req";
import { ModifyNetworkPackageEnabledResponse } from "./ModifyNetworkPackageEnabled/res";
import { DeleteNetworkPackagesRequest } from "./DeleteNetworkPackages/req";
import { DeleteNetworkPackagesResponse } from "./DeleteNetworkPackages/res";
import { AttachCenRequest } from "./AttachCen/req";
import { AttachCenResponse } from "./AttachCen/res";
import { VerifyCenRequest } from "./VerifyCen/req";
import { VerifyCenResponse } from "./VerifyCen/res";
import { SendVerifyCodeRequest } from "./SendVerifyCode/req";
import { SendVerifyCodeResponse } from "./SendVerifyCode/res";
import { DetachCenRequest } from "./DetachCen/req";
import { DetachCenResponse } from "./DetachCen/res";
import { DescribeCensRequest } from "./DescribeCens/req";
import { DescribeCensResponse } from "./DescribeCens/res";
import { CreateNASFileSystemRequest } from "./CreateNASFileSystem/req";
import { CreateNASFileSystemResponse } from "./CreateNASFileSystem/res";
import { DescribeNASFileSystemsRequest } from "./DescribeNASFileSystems/req";
import { DescribeNASFileSystemsResponse } from "./DescribeNASFileSystems/res";
import { ModifyNASDefaultMountTargetRequest } from "./ModifyNASDefaultMountTarget/req";
import { ModifyNASDefaultMountTargetResponse } from "./ModifyNASDefaultMountTarget/res";
import { ResetNASDefaultMountTargetRequest } from "./ResetNASDefaultMountTarget/req";
import { ResetNASDefaultMountTargetResponse } from "./ResetNASDefaultMountTarget/res";
import { DeleteNASFileSystemsRequest } from "./DeleteNASFileSystems/req";
import { DeleteNASFileSystemsResponse } from "./DeleteNASFileSystems/res";
import { CreateSnapshotRequest } from "./CreateSnapshot/req";
import { CreateSnapshotResponse } from "./CreateSnapshot/res";
import { DescribeSnapshotsRequest } from "./DescribeSnapshots/req";
import { DescribeSnapshotsResponse } from "./DescribeSnapshots/res";
import { ResetSnapshotRequest } from "./ResetSnapshot/req";
import { ResetSnapshotResponse } from "./ResetSnapshot/res";
import { DeleteSnapshotRequest } from "./DeleteSnapshot/req";
import { DeleteSnapshotResponse } from "./DeleteSnapshot/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { DescribeClientEventsRequest } from "./DescribeClientEvents/req";
import { DescribeClientEventsResponse } from "./DescribeClientEvents/res";
import { RunCommandRequest } from "./RunCommand/req";
import { RunCommandResponse } from "./RunCommand/res";
import { StopInvocationRequest } from "./StopInvocation/req";
import { StopInvocationResponse } from "./StopInvocation/res";
import { DescribeInvocationsRequest } from "./DescribeInvocations/req";
import { DescribeInvocationsResponse } from "./DescribeInvocations/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { SetOfficeSiteSsoStatusRequest } from "./SetOfficeSiteSsoStatus/req";
import { SetOfficeSiteSsoStatusResponse } from "./SetOfficeSiteSsoStatus/res";
import { GetOfficeSiteSsoStatusRequest } from "./GetOfficeSiteSsoStatus/req";
import { GetOfficeSiteSsoStatusResponse } from "./GetOfficeSiteSsoStatus/res";
import { SetDirectorySsoStatusRequest } from "./SetDirectorySsoStatus/req";
import { SetDirectorySsoStatusResponse } from "./SetDirectorySsoStatus/res";
import { GetSpMetadataRequest } from "./GetSpMetadata/req";
import { GetSpMetadataResponse } from "./GetSpMetadata/res";
import { SetIdpMetadataRequest } from "./SetIdpMetadata/req";
import { SetIdpMetadataResponse } from "./SetIdpMetadata/res";
import { CreateDesktopGroupRequest } from "./CreateDesktopGroup/req";
import { CreateDesktopGroupResponse } from "./CreateDesktopGroup/res";
import { ModifyDesktopGroupRequest } from "./ModifyDesktopGroup/req";
import { ModifyDesktopGroupResponse } from "./ModifyDesktopGroup/res";
import { DeleteDesktopGroupRequest } from "./DeleteDesktopGroup/req";
import { DeleteDesktopGroupResponse } from "./DeleteDesktopGroup/res";
import { DescribeDesktopGroupsRequest } from "./DescribeDesktopGroups/req";
import { DescribeDesktopGroupsResponse } from "./DescribeDesktopGroups/res";
import { DescribeDesktopsInGroupRequest } from "./DescribeDesktopsInGroup/req";
import { DescribeDesktopsInGroupResponse } from "./DescribeDesktopsInGroup/res";
import { DescribeUsersInGroupRequest } from "./DescribeUsersInGroup/req";
import { DescribeUsersInGroupResponse } from "./DescribeUsersInGroup/res";
import { DescribeUserConnectionRecordsRequest } from "./DescribeUserConnectionRecords/req";
import { DescribeUserConnectionRecordsResponse } from "./DescribeUserConnectionRecords/res";
import { AddUserToDesktopGroupRequest } from "./AddUserToDesktopGroup/req";
import { AddUserToDesktopGroupResponse } from "./AddUserToDesktopGroup/res";
import { ModifyUserToDesktopGroupRequest } from "./ModifyUserToDesktopGroup/req";
import { ModifyUserToDesktopGroupResponse } from "./ModifyUserToDesktopGroup/res";
import { RemoveUserFromDesktopGroupRequest } from "./RemoveUserFromDesktopGroup/req";
import { RemoveUserFromDesktopGroupResponse } from "./RemoveUserFromDesktopGroup/res";
import { GetDesktopGroupDetailRequest } from "./GetDesktopGroupDetail/req";
import { GetDesktopGroupDetailResponse } from "./GetDesktopGroupDetail/res";
import { ExportDesktopGroupInfoRequest } from "./ExportDesktopGroupInfo/req";
import { ExportDesktopGroupInfoResponse } from "./ExportDesktopGroupInfo/res";
import { GetConnectionTicketRequest } from "./GetConnectionTicket/req";
import { GetConnectionTicketResponse } from "./GetConnectionTicket/res";
import { RenewNetworkPackagesRequest } from "./RenewNetworkPackages/req";
import { RenewNetworkPackagesResponse } from "./RenewNetworkPackages/res";
import { DescribeFlowMetricRequest } from "./DescribeFlowMetric/req";
import { DescribeFlowMetricResponse } from "./DescribeFlowMetric/res";
import { CreateCloudDriveServiceRequest } from "./CreateCloudDriveService/req";
import { CreateCloudDriveServiceResponse } from "./CreateCloudDriveService/res";
import { ModifyNetworkPackageBandwidthRequest } from "./ModifyNetworkPackageBandwidth/req";
import { ModifyNetworkPackageBandwidthResponse } from "./ModifyNetworkPackageBandwidth/res";
import { ExportClientEventsRequest } from "./ExportClientEvents/req";
import { ExportClientEventsResponse } from "./ExportClientEvents/res";
import { UploadImageRequest } from "./UploadImage/req";
import { UploadImageResponse } from "./UploadImage/res";
import { DisableDesktopsInGroupRequest } from "./DisableDesktopsInGroup/req";
import { DisableDesktopsInGroupResponse } from "./DisableDesktopsInGroup/res";
import { MigrateDesktopsRequest } from "./MigrateDesktops/req";
import { MigrateDesktopsResponse } from "./MigrateDesktops/res";
import { SetDesktopGroupTimerRequest } from "./SetDesktopGroupTimer/req";
import { SetDesktopGroupTimerResponse } from "./SetDesktopGroupTimer/res";
import { SetDesktopGroupTimerStatusRequest } from "./SetDesktopGroupTimerStatus/req";
import { SetDesktopGroupTimerStatusResponse } from "./SetDesktopGroupTimerStatus/res";
import { ApproveFotaUpdateRequest } from "./ApproveFotaUpdate/req";
import { ApproveFotaUpdateResponse } from "./ApproveFotaUpdate/res";
import { DescribeFotaPendingDesktopsRequest } from "./DescribeFotaPendingDesktops/req";
import { DescribeFotaPendingDesktopsResponse } from "./DescribeFotaPendingDesktops/res";
import { UpdateFotaTaskRequest } from "./UpdateFotaTask/req";
import { UpdateFotaTaskResponse } from "./UpdateFotaTask/res";
import { DescribeFotaTasksRequest } from "./DescribeFotaTasks/req";
import { DescribeFotaTasksResponse } from "./DescribeFotaTasks/res";
import { DescribeRecordingsRequest } from "./DescribeRecordings/req";
import { DescribeRecordingsResponse } from "./DescribeRecordings/res";
import { DescribeImageModifiedRecordsRequest } from "./DescribeImageModifiedRecords/req";
import { DescribeImageModifiedRecordsResponse } from "./DescribeImageModifiedRecords/res";
import { CreateDiskEncryptionServiceRequest } from "./CreateDiskEncryptionService/req";
import { CreateDiskEncryptionServiceResponse } from "./CreateDiskEncryptionService/res";
import { DescribeKmsKeysRequest } from "./DescribeKmsKeys/req";
import { DescribeKmsKeysResponse } from "./DescribeKmsKeys/res";
import { DescribeImagePermissionRequest } from "./DescribeImagePermission/req";
import { DescribeImagePermissionResponse } from "./DescribeImagePermission/res";
import { CancelCopyImageRequest } from "./CancelCopyImage/req";
import { CancelCopyImageResponse } from "./CancelCopyImage/res";
import { CopyImageRequest } from "./CopyImage/req";
import { CopyImageResponse } from "./CopyImage/res";
import { ModifyImagePermissionRequest } from "./ModifyImagePermission/req";
import { ModifyImagePermissionResponse } from "./ModifyImagePermission/res";
import { DescribeFlowStatisticRequest } from "./DescribeFlowStatistic/req";
import { DescribeFlowStatisticResponse } from "./DescribeFlowStatistic/res";
import { ResetDesktopsRequest } from "./ResetDesktops/req";
import { ResetDesktopsResponse } from "./ResetDesktops/res";
import { AssociateNetworkPackageRequest } from "./AssociateNetworkPackage/req";
import { AssociateNetworkPackageResponse } from "./AssociateNetworkPackage/res";
import { DissociateNetworkPackageRequest } from "./DissociateNetworkPackage/req";
import { DissociateNetworkPackageResponse } from "./DissociateNetworkPackage/res";
import { ModifyDiskSpecRequest } from "./ModifyDiskSpec/req";
import { ModifyDiskSpecResponse } from "./ModifyDiskSpec/res";
import { DescribeGuestApplicationsRequest } from "./DescribeGuestApplications/req";
import { DescribeGuestApplicationsResponse } from "./DescribeGuestApplications/res";
import { DescribeDesktopSessionsRequest } from "./DescribeDesktopSessions/req";
import { DescribeDesktopSessionsResponse } from "./DescribeDesktopSessions/res";
import { ApplyCoordinationForMonitoringRequest } from "./ApplyCoordinationForMonitoring/req";
import { ApplyCoordinationForMonitoringResponse } from "./ApplyCoordinationForMonitoring/res";
import { CancelCoordinationForMonitoringRequest } from "./CancelCoordinationForMonitoring/req";
import { CancelCoordinationForMonitoringResponse } from "./CancelCoordinationForMonitoring/res";
import { GetCoordinateTicketRequest } from "./GetCoordinateTicket/req";
import { GetCoordinateTicketResponse } from "./GetCoordinateTicket/res";
import { DescribeUsersPasswordRequest } from "./DescribeUsersPassword/req";
import { DescribeUsersPasswordResponse } from "./DescribeUsersPassword/res";
import { ModifyDesktopTimerRequest } from "./ModifyDesktopTimer/req";
import { ModifyDesktopTimerResponse } from "./ModifyDesktopTimer/res";
import { ModifyCloudDriveUsersRequest } from "./ModifyCloudDriveUsers/req";
import { ModifyCloudDriveUsersResponse } from "./ModifyCloudDriveUsers/res";
import { ModifyCloudDrivePermissionRequest } from "./ModifyCloudDrivePermission/req";
import { ModifyCloudDrivePermissionResponse } from "./ModifyCloudDrivePermission/res";
import { DescribeCloudDrivePermissionsRequest } from "./DescribeCloudDrivePermissions/req";
import { DescribeCloudDrivePermissionsResponse } from "./DescribeCloudDrivePermissions/res";
import { DeleteCloudDriveUsersRequest } from "./DeleteCloudDriveUsers/req";
import { DeleteCloudDriveUsersResponse } from "./DeleteCloudDriveUsers/res";
import { CreateCloudDriveUsersRequest } from "./CreateCloudDriveUsers/req";
import { CreateCloudDriveUsersResponse } from "./CreateCloudDriveUsers/res";
import { DescribeCloudDriveUsersRequest } from "./DescribeCloudDriveUsers/req";
import { DescribeCloudDriveUsersResponse } from "./DescribeCloudDriveUsers/res";
import { MigrateImageProtocolRequest } from "./MigrateImageProtocol/req";
import { MigrateImageProtocolResponse } from "./MigrateImageProtocol/res";
import { CreateAndBindNasFileSystemRequest } from "./CreateAndBindNasFileSystem/req";
import { CreateAndBindNasFileSystemResponse } from "./CreateAndBindNasFileSystem/res";
import { ModifyCustomizedListHeadersRequest } from "./ModifyCustomizedListHeaders/req";
import { ModifyCustomizedListHeadersResponse } from "./ModifyCustomizedListHeaders/res";
import { DescribeCustomizedListHeadersRequest } from "./DescribeCustomizedListHeaders/req";
import { DescribeCustomizedListHeadersResponse } from "./DescribeCustomizedListHeaders/res";
import { ApplyCoordinatePrivilegeRequest } from "./ApplyCoordinatePrivilege/req";
import { ApplyCoordinatePrivilegeResponse } from "./ApplyCoordinatePrivilege/res";
import { RevokeCoordinatePrivilegeRequest } from "./RevokeCoordinatePrivilege/req";
import { RevokeCoordinatePrivilegeResponse } from "./RevokeCoordinatePrivilege/res";
import { DisconnectDesktopSessionsRequest } from "./DisconnectDesktopSessions/req";
import { DisconnectDesktopSessionsResponse } from "./DisconnectDesktopSessions/res";
import { DescribeDesktopGroupSessionsRequest } from "./DescribeDesktopGroupSessions/req";
import { DescribeDesktopGroupSessionsResponse } from "./DescribeDesktopGroupSessions/res";
import { DeleteDevicesRequest } from "./DeleteDevices/req";
import { DeleteDevicesResponse } from "./DeleteDevices/res";
import { AttachEndUserRequest } from "./AttachEndUser/req";
import { AttachEndUserResponse } from "./AttachEndUser/res";
import { DetachEndUserRequest } from "./DetachEndUser/req";
import { DetachEndUserResponse } from "./DetachEndUser/res";
import { DescribeDevicesRequest } from "./DescribeDevices/req";
import { DescribeDevicesResponse } from "./DescribeDevices/res";
import { AddDevicesRequest } from "./AddDevices/req";
import { AddDevicesResponse } from "./AddDevices/res";
import { SetDesktopGroupScaleTimerRequest } from "./SetDesktopGroupScaleTimer/req";
import { SetDesktopGroupScaleTimerResponse } from "./SetDesktopGroupScaleTimer/res";
import { CancelAutoSnapshotPolicyRequest } from "./CancelAutoSnapshotPolicy/req";
import { CancelAutoSnapshotPolicyResponse } from "./CancelAutoSnapshotPolicy/res";
import { ModifyAutoSnapshotPolicyRequest } from "./ModifyAutoSnapshotPolicy/req";
import { ModifyAutoSnapshotPolicyResponse } from "./ModifyAutoSnapshotPolicy/res";
import { DeleteAutoSnapshotPolicyRequest } from "./DeleteAutoSnapshotPolicy/req";
import { DeleteAutoSnapshotPolicyResponse } from "./DeleteAutoSnapshotPolicy/res";
import { DescribeAutoSnapshotPolicyRequest } from "./DescribeAutoSnapshotPolicy/req";
import { DescribeAutoSnapshotPolicyResponse } from "./DescribeAutoSnapshotPolicy/res";
import { CreateAutoSnapshotPolicyRequest } from "./CreateAutoSnapshotPolicy/req";
import { CreateAutoSnapshotPolicyResponse } from "./CreateAutoSnapshotPolicy/res";
import { ApplyAutoSnapshotPolicyRequest } from "./ApplyAutoSnapshotPolicy/req";
import { ApplyAutoSnapshotPolicyResponse } from "./ApplyAutoSnapshotPolicy/res";
import { CreateCdsFileRequest } from "./CreateCdsFile/req";
import { CreateCdsFileResponse } from "./CreateCdsFile/res";
import { CompleteCdsFileRequest } from "./CompleteCdsFile/req";
import { CompleteCdsFileResponse } from "./CompleteCdsFile/res";
import { ListCdsFilesRequest } from "./ListCdsFiles/req";
import { ListCdsFilesResponse } from "./ListCdsFiles/res";
import { RemoveFilePermissionRequest } from "./RemoveFilePermission/req";
import { RemoveFilePermissionResponse } from "./RemoveFilePermission/res";
import { AddFilePermissionRequest } from "./AddFilePermission/req";
import { AddFilePermissionResponse } from "./AddFilePermission/res";
import { ListFilePermissionRequest } from "./ListFilePermission/req";
import { ListFilePermissionResponse } from "./ListFilePermission/res";
import { ModifyCdsFileRequest } from "./ModifyCdsFile/req";
import { ModifyCdsFileResponse } from "./ModifyCdsFile/res";
import { DeleteCdsFileRequest } from "./DeleteCdsFile/req";
import { DeleteCdsFileResponse } from "./DeleteCdsFile/res";
import { MoveCdsFileRequest } from "./MoveCdsFile/req";
import { MoveCdsFileResponse } from "./MoveCdsFile/res";
import { CopyCdsFileRequest } from "./CopyCdsFile/req";
import { CopyCdsFileResponse } from "./CopyCdsFile/res";
import { DescribeSessionStatisticRequest } from "./DescribeSessionStatistic/req";
import { DescribeSessionStatisticResponse } from "./DescribeSessionStatistic/res";
import { WakeupDesktopsRequest } from "./WakeupDesktops/req";
import { WakeupDesktopsResponse } from "./WakeupDesktops/res";
import { HibernateDesktopsRequest } from "./HibernateDesktops/req";
import { HibernateDesktopsResponse } from "./HibernateDesktops/res";
import { DeleteCloudDriveGroupsRequest } from "./DeleteCloudDriveGroups/req";
import { DeleteCloudDriveGroupsResponse } from "./DeleteCloudDriveGroups/res";
import { ModifyCloudDriveGroupsRequest } from "./ModifyCloudDriveGroups/req";
import { ModifyCloudDriveGroupsResponse } from "./ModifyCloudDriveGroups/res";
import { DescribeCloudDriveGroupsRequest } from "./DescribeCloudDriveGroups/req";
import { DescribeCloudDriveGroupsResponse } from "./DescribeCloudDriveGroups/res";
import { CreateCdsFileShareLinkRequest } from "./CreateCdsFileShareLink/req";
import { CreateCdsFileShareLinkResponse } from "./CreateCdsFileShareLink/res";
import { CancelCdsFileShareLinkRequest } from "./CancelCdsFileShareLink/req";
import { CancelCdsFileShareLinkResponse } from "./CancelCdsFileShareLink/res";
import { DescribeCdsFileShareLinksRequest } from "./DescribeCdsFileShareLinks/req";
import { DescribeCdsFileShareLinksResponse } from "./DescribeCdsFileShareLinks/res";
import { ModifyCdsFileShareLinkRequest } from "./ModifyCdsFileShareLink/req";
import { ModifyCdsFileShareLinkResponse } from "./ModifyCdsFileShareLink/res";
import { GetAsyncTaskRequest } from "./GetAsyncTask/req";
import { GetAsyncTaskResponse } from "./GetAsyncTask/res";
import { DescribeAclEntriesRequest } from "./DescribeAclEntries/req";
import { DescribeAclEntriesResponse } from "./DescribeAclEntries/res";
import { ModifyAclEntriesRequest } from "./ModifyAclEntries/req";
import { ModifyAclEntriesResponse } from "./ModifyAclEntries/res";
import { DescribeDesktopInfoRequest } from "./DescribeDesktopInfo/req";
import { DescribeDesktopInfoResponse } from "./DescribeDesktopInfo/res";

interface ECD {
    /**
     * 创建一台或多台云电脑。创建时若传入用户信息，可直接完成云电脑的分配。
     */
    CreateDesktops(query: CreateDesktopsRequest): Promise<CreateDesktopsResponse>;
    /**
     * 查询云电脑的详细信息。
     */
    DescribeDesktops(query: DescribeDesktopsRequest): Promise<DescribeDesktopsResponse>;
    /**
     * 查询云电脑规格的详细信息。
     */
    DescribeDesktopTypes(query: DescribeDesktopTypesRequest): Promise<DescribeDesktopTypesResponse>;
    /**
     * 重启一台或者多台云电脑。
     */
    RebootDesktops(query: RebootDesktopsRequest): Promise<RebootDesktopsResponse>;
    /**
     * 启动一台或者多台已停止的云电脑。接口调用成功后，云电脑进入运行中状态。
     */
    StartDesktops(query: StartDesktopsRequest): Promise<StartDesktopsResponse>;
    /**
     * 停止一台或者多台运行中的云电脑。接口调用成功后，云电脑进入已停止状态。
     */
    StopDesktops(query: StopDesktopsRequest): Promise<StopDesktopsResponse>;
    /**
     * 重建云电脑实例。
     */
    RebuildDesktops(query: RebuildDesktopsRequest): Promise<RebuildDesktopsResponse>;
    /**
     * 变更云电脑的规格和扩容磁盘。
     */
    ModifyDesktopSpec(query: ModifyDesktopSpecRequest): Promise<ModifyDesktopSpecResponse>;
    /**
     * 将指定云电脑的名称修改为新名称。
     */
    ModifyDesktopName(query: ModifyDesktopNameRequest): Promise<ModifyDesktopNameResponse>;
    /**
     * 将云电脑分配给指定用户，同时移除该云电脑此前已有的所有授权用户。
     */
    ModifyEntitlement(query: ModifyEntitlementRequest): Promise<ModifyEntitlementResponse>;
    /**
     * 为一个或多个用户新增或删除指定的一台或多台云电脑的授权。
     */
    ModifyUserEntitlement(query: ModifyUserEntitlementRequest): Promise<ModifyUserEntitlementResponse>;
    /**
     * 将云电脑的付费类型转为包年包月或按量付费。
     */
    ModifyDesktopChargeType(query: ModifyDesktopChargeTypeRequest): Promise<ModifyDesktopChargeTypeResponse>;
    /**
     * 修改AD办公网络下的Windows云电脑的主机名称。
     */
    ModifyDesktopHostName(query: ModifyDesktopHostNameRequest): Promise<ModifyDesktopHostNameResponse>;
    /**
     * 续费一台或者多台包年包月云电脑。
     */
    RenewDesktops(query: RenewDesktopsRequest): Promise<RenewDesktopsResponse>;
    /**
     * 释放一台或多台按量付费云电脑或到期的包年包月云电脑。
     */
    DeleteDesktops(query: DeleteDesktopsRequest): Promise<DeleteDesktopsResponse>;
    /**
     * 将云电脑列表导出为CSV文件。
     */
    ExportDesktopListInfo(query: ExportDesktopListInfoRequest): Promise<ExportDesktopListInfoResponse>;
    /**
     * 创建RAM类型的目录。
     */
    CreateRAMDirectory(query: CreateRAMDirectoryRequest): Promise<CreateRAMDirectoryResponse>;
    /**
     * 创建AD类型的目录。
     */
    CreateADConnectorDirectory(query: CreateADConnectorDirectoryRequest): Promise<CreateADConnectorDirectoryResponse>;
    /**
     * 修改AD目录。
     */
    ModifyADConnectorDirectory(query: ModifyADConnectorDirectoryRequest): Promise<ModifyADConnectorDirectoryResponse>;
    /**
     * 查询目录的详细信息。
     */
    DescribeDirectories(query: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse>;
    /**
     * 删除一个或多个目录。
     */
    DeleteDirectories(query: DeleteDirectoriesRequest): Promise<DeleteDirectoriesResponse>;
    /**
     * 无影云电脑支持便捷账号和企业AD账号这两种账号体系。本接口用于创建一个基于便捷账号的办公网络（原工作区）。
     */
    CreateSimpleOfficeSite(query: CreateSimpleOfficeSiteRequest): Promise<CreateSimpleOfficeSiteResponse>;
    /**
     * 无影云电脑支持便捷账号和企业AD账号这两种账号体系。本接口用于创建一个基于企业AD账号的办公网络（原工作区）。
     */
    CreateADConnectorOfficeSite(query: CreateADConnectorOfficeSiteRequest): Promise<CreateADConnectorOfficeSiteResponse>;
    /**
     * 对于采用HDX协议的办公网络（原工作区），需要配置条件转发器和信任关系后方可正常使用。可调用本接口为AD办公网络配置信任关系。
     */
    ConfigADConnectorTrust(query: ConfigADConnectorTrustRequest): Promise<ConfigADConnectorTrustResponse>;
    /**
     * 获取AD办公网络（原工作区）对接的AD域的组织单元OU信息。
     */
    ListUserAdOrganizationUnits(query: ListUserAdOrganizationUnitsRequest): Promise<ListUserAdOrganizationUnitsResponse>;
    /**
     * 为AD办公网络（原工作区）指定组织单元OU和管理员。
     */
    ConfigADConnectorUser(query: ConfigADConnectorUserRequest): Promise<ConfigADConnectorUserResponse>;
    /**
     * 修改AD办公网络（原工作区）的基本属性，例如办公网络名称、企业AD子域的域名等。
     */
    ModifyADConnectorOfficeSite(query: ModifyADConnectorOfficeSiteRequest): Promise<ModifyADConnectorOfficeSiteResponse>;
    /**
     * 开启或关闭办公网络（原工作区）内云电脑互通。开启后，同一个办公网络内的云电脑之间可以实现相互访问彼此的网络。
     */
    ModifyOfficeSiteCrossDesktopAccess(query: ModifyOfficeSiteCrossDesktopAccessRequest): Promise<ModifyOfficeSiteCrossDesktopAccessResponse>;
    /**
     * 修改办公网络（原工作区）的基本属性，例如办公网络名称、是否为使用云电脑的用户赋予本地管理员权限等。
     */
    ModifyOfficeSiteAttribute(query: ModifyOfficeSiteAttributeRequest): Promise<ModifyOfficeSiteAttributeResponse>;
    /**
     * 为AD办公网络（原工作区）开启或者关闭多因素认证MFA。
     */
    ModifyOfficeSiteMfaEnabled(query: ModifyOfficeSiteMfaEnabledRequest): Promise<ModifyOfficeSiteMfaEnabledResponse>;
    /**
     * 查询办公网络（原工作区）的概览信息，包括状态、云电脑数量、VPC网络类型等。
     */
    ListOfficeSiteOverview(query: ListOfficeSiteOverviewRequest): Promise<ListOfficeSiteOverviewResponse>;
    /**
     * 查询办公网络的所有属性，包括ID、名称、状态、创建时间等。
     */
    DescribeOfficeSites(query: DescribeOfficeSitesRequest): Promise<DescribeOfficeSitesResponse>;
    /**
     * 基于便捷账号的办公网络闲置一定时间后将被自动锁定。调用本接口可解锁。
     */
    ActivateOfficeSite(query: ActivateOfficeSiteRequest): Promise<ActivateOfficeSiteResponse>;
    /**
     * 将办公网络（原工作区）内的云电脑资源完全释放后可以将办公网络删除。
     */
    DeleteOfficeSites(query: DeleteOfficeSitesRequest): Promise<DeleteOfficeSitesResponse>;
    /**
     * 查询AD办公网络（原工作区）对接AD域后获取的AD用户信息。
     */
    ListOfficeSiteUsers(query: ListOfficeSiteUsersRequest): Promise<ListOfficeSiteUsersResponse>;
    /**
     * 如果您使用AD目录来对接企业自有AD，调用该接口可以获取企业AD中的用户信息。
     */
    ListDirectoryUsers(query: ListDirectoryUsersRequest): Promise<ListDirectoryUsersResponse>;
    /**
     * 查询AD用户绑定的多因素认证设备。
     */
    DescribeVirtualMFADevices(query: DescribeVirtualMFADevicesRequest): Promise<DescribeVirtualMFADevicesResponse>;
    /**
     * 锁定处于正常（NORMAL）状态的虚拟MFA设备。
     */
    LockVirtualMFADevice(query: LockVirtualMFADeviceRequest): Promise<LockVirtualMFADeviceResponse>;
    /**
     * 解锁处于锁定（LOCKED）状态的虚拟MFA设备。
     */
    UnlockVirtualMFADevice(query: UnlockVirtualMFADeviceRequest): Promise<UnlockVirtualMFADeviceResponse>;
    /**
     * 删除虚拟MFA设备。
     */
    DeleteVirtualMFADevice(query: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse>;
    /**
     * 创建策略。
     */
    CreatePolicyGroup(query: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse>;
    /**
     * 查询策略的详细信息。
     */
    DescribePolicyGroups(query: DescribePolicyGroupsRequest): Promise<DescribePolicyGroupsResponse>;
    /**
     * 为云桌面重新分配策略。
     */
    ModifyDesktopsPolicyGroup(query: ModifyDesktopsPolicyGroupRequest): Promise<ModifyDesktopsPolicyGroupResponse>;
    /**
     * 修改策略。
     */
    ModifyPolicyGroup(query: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse>;
    /**
     * 克隆策略。
     */
    ClonePolicyGroup(query: ClonePolicyGroupRequest): Promise<ClonePolicyGroupResponse>;
    /**
     * 删除一个或多个自定义策略。
     */
    DeletePolicyGroups(query: DeletePolicyGroupsRequest): Promise<DeletePolicyGroupsResponse>;
    /**
     * 通过已部署好的云电脑创建自定义镜像，以便快速创建更多相同配置的云电脑，避免每次创建时重复配置。
     */
    CreateImage(query: CreateImageRequest): Promise<CreateImageResponse>;
    /**
     * 查询镜像的详细信息。
     */
    DescribeImages(query: DescribeImagesRequest): Promise<DescribeImagesResponse>;
    /**
     * 修改镜像的属性，包括镜像的名称和描述。
     */
    ModifyImageAttribute(query: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse>;
    /**
     * 删除一个或多个自定义镜像。
     */
    DeleteImages(query: DeleteImagesRequest): Promise<DeleteImagesResponse>;
    /**
     * 创建自定义的云电脑模板。
     */
    CreateBundle(query: CreateBundleRequest): Promise<CreateBundleResponse>;
    /**
     * 查询云电脑模板的详细信息。
     */
    DescribeBundles(query: DescribeBundlesRequest): Promise<DescribeBundlesResponse>;
    /**
     * 修改自定义云电脑模板。
     */
    ModifyBundle(query: ModifyBundleRequest): Promise<ModifyBundleResponse>;
    /**
     * 删除一个或多个自定义云电脑模板。
     */
    DeleteBundles(query: DeleteBundlesRequest): Promise<DeleteBundlesResponse>;
    /**
     * 为办公网络创建一个公网精品带宽。
     */
    CreateNetworkPackage(query: CreateNetworkPackageRequest): Promise<CreateNetworkPackageResponse>;
    /**
     * 查询一个或者多个公网精品带宽的详细信息。
     */
    DescribeNetworkPackages(query: DescribeNetworkPackagesRequest): Promise<DescribeNetworkPackagesResponse>;
    /**
     * 恢复或停用公网精品带宽。
     */
    ModifyNetworkPackageEnabled(query: ModifyNetworkPackageEnabledRequest): Promise<ModifyNetworkPackageEnabledResponse>;
    /**
     * 删除一个或者多个公网精品带宽。
     */
    DeleteNetworkPackages(query: DeleteNetworkPackagesRequest): Promise<DeleteNetworkPackagesResponse>;
    /**
     * 将高级办公网络与云企业网实例绑定。
     */
    AttachCen(query: AttachCenRequest): Promise<AttachCenResponse>;
    /**
     * 校验云企业网实例ID与所属阿里云账号ID是否正确，以及实例路由与办公网络IPv4网段是否存在网段冲突。
     */
    VerifyCen(query: VerifyCenRequest): Promise<VerifyCenResponse>;
    /**
     * 将高级办公网络加入其他阿里云账号下的云企业网实例时，需要调用此接口获取验证码。
     */
    SendVerifyCode(query: SendVerifyCodeRequest): Promise<SendVerifyCodeResponse>;
    /**
     * 将高级办公网络与已加入的云企业网实例解绑。
     */
    DetachCen(query: DetachCenRequest): Promise<DetachCenResponse>;
    /**
     * 查询账号下所有云企业网实例信息。
     */
    DescribeCens(query: DescribeCensRequest): Promise<DescribeCensResponse>;
    /**
     * 创建一个NAS文件系统。
     */
    CreateNASFileSystem(query: CreateNASFileSystemRequest): Promise<CreateNASFileSystemResponse>;
    /**
     * 查询NAS文件系统信息。
     */
    DescribeNASFileSystems(query: DescribeNASFileSystemsRequest): Promise<DescribeNASFileSystemsResponse>;
    /**
     * 修改NAS文件系统的挂载点。
     */
    ModifyNASDefaultMountTarget(query: ModifyNASDefaultMountTargetRequest): Promise<ModifyNASDefaultMountTargetResponse>;
    /**
     * 重置NAS文件系统的挂载点。
     */
    ResetNASDefaultMountTarget(query: ResetNASDefaultMountTargetRequest): Promise<ResetNASDefaultMountTargetResponse>;
    /**
     * 删除一个或者多个NAS文件系统。
     */
    DeleteNASFileSystems(query: DeleteNASFileSystemsRequest): Promise<DeleteNASFileSystemsResponse>;
    /**
     * 为云电脑的磁盘创建一份快照，用于备份和恢复磁盘上的数据。
     */
    CreateSnapshot(query: CreateSnapshotRequest): Promise<CreateSnapshotResponse>;
    /**
     * 查询一台云电脑的快照列表和快照的详细信息。
     */
    DescribeSnapshots(query: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse>;
    /**
     * 恢复快照对应的磁盘数据。
     */
    ResetSnapshot(query: ResetSnapshotRequest): Promise<ResetSnapshotResponse>;
    /**
     * 用于删除一份或多份快照。
     */
    DeleteSnapshot(query: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse>;
    /**
     * 查询无影云桌面支持的阿里云地域信息。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 查询无影云电脑在某一个阿里云地域下支持的可用区信息。
     */
    DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
     * 查询终端用户的操作日志，包括桌面开机、桌面关机、桌面会话断开等事件。
     */
    DescribeClientEvents(query: DescribeClientEventsRequest): Promise<DescribeClientEventsResponse>;
    /**
     * 在一台或多台Windows操作系统云桌面中执行一段PowerShell或者Bat类型的脚本。
     */
    RunCommand(query: RunCommandRequest): Promise<RunCommandResponse>;
    /**
     * 停止一台或多台云桌面中一条正在进行中的云助手命令进程。
     */
    StopInvocation(query: StopInvocationRequest): Promise<StopInvocationResponse>;
    /**
     * 用于查询云助手脚本的执行列表和状态。
     */
    DescribeInvocations(query: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse>;
    /**
     * 为指定的云电脑添加标签，方便通过标签统一筛选和管理云电脑。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 查询云电脑已添加标签的列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为云电脑移除标签。移除标签后，如果该标签没有被添加到任何云电脑上，则标签会被自动删除。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 为工作区开启或者关闭单点登录SSO功能。
     */
    SetOfficeSiteSsoStatus(query: SetOfficeSiteSsoStatusRequest): Promise<SetOfficeSiteSsoStatusResponse>;
    /**
     * 查询工作区是否开启了单点登录SSO功能。
     */
    GetOfficeSiteSsoStatus(query: GetOfficeSiteSsoStatusRequest): Promise<GetOfficeSiteSsoStatusResponse>;
    /**
     * 设置AD目录的SSO状态。
     */
    SetDirectorySsoStatus(query: SetDirectorySsoStatusRequest): Promise<SetDirectorySsoStatusResponse>;
    /**
     * 获取基于SAML 2.0的服务提供商SP（Service Provider）的元数据。
     */
    GetSpMetadata(query: GetSpMetadataRequest): Promise<GetSpMetadataResponse>;
    /**
     * 上传基于SAML 2.0的身份提供商IdP（Identity Provider）的元数据。
     */
    SetIdpMetadata(query: SetIdpMetadataRequest): Promise<SetIdpMetadataResponse>;
    /**
     * 创建一个云电脑池。
     */
    CreateDesktopGroup(query: CreateDesktopGroupRequest): Promise<CreateDesktopGroupResponse>;
    /**
     * 修改云电脑池。
     */
    ModifyDesktopGroup(query: ModifyDesktopGroupRequest): Promise<ModifyDesktopGroupResponse>;
    /**
     * 释放云电脑池。
     */
    DeleteDesktopGroup(query: DeleteDesktopGroupRequest): Promise<DeleteDesktopGroupResponse>;
    /**
     * 查询云电脑池列表及详情。
     */
    DescribeDesktopGroups(query: DescribeDesktopGroupsRequest): Promise<DescribeDesktopGroupsResponse>;
    /**
     * 按付费类型查询云电脑池包含的云电脑列表。
     */
    DescribeDesktopsInGroup(query: DescribeDesktopsInGroupRequest): Promise<DescribeDesktopsInGroupResponse>;
    /**
     * 查询云电脑池所有授权用户的详情，包括用户名、邮箱地址、手机号、获得授权的云电脑ID等。
     */
    DescribeUsersInGroup(query: DescribeUsersInGroupRequest): Promise<DescribeUsersInGroupResponse>;
    /**
     * 查询云电脑池的授权用户连接池化云电脑的具体记录。
     */
    DescribeUserConnectionRecords(query: DescribeUserConnectionRecordsRequest): Promise<DescribeUserConnectionRecordsResponse>;
    /**
     * 为云电脑池添加授权用户。云电脑池内的云电脑会按照管理员设置的规则自动分配给授权用户使用。
     */
    AddUserToDesktopGroup(query: AddUserToDesktopGroupRequest): Promise<AddUserToDesktopGroupResponse>;
    /**
     * 将云电脑池的指定授权用户替换为其他指定授权用户。
     */
    ModifyUserToDesktopGroup(query: ModifyUserToDesktopGroupRequest): Promise<ModifyUserToDesktopGroupResponse>;
    /**
     * 将云电脑池的指定授权用户移除出去。被移除的用户将无法再连接云电脑池内的云电脑。
     */
    RemoveUserFromDesktopGroup(query: RemoveUserFromDesktopGroupRequest): Promise<RemoveUserFromDesktopGroupResponse>;
    /**
     * 获取一个云电脑池的详细信息。
     */
    GetDesktopGroupDetail(query: GetDesktopGroupDetailRequest): Promise<GetDesktopGroupDetailResponse>;
    /**
     * 调用本接口导出的云电脑池列表将保存为XLSX文件。每条云电脑池数据包括云电脑池ID和名称、办公网络ID和名称、云电脑池模板、安全策略名称等。
     */
    ExportDesktopGroupInfo(query: ExportDesktopGroupInfoRequest): Promise<ExportDesktopGroupInfoResponse>;
    /**
     * 获取云电脑连接凭证。
     */
    GetConnectionTicket(query: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse>;
    /**
     * 为包年包月公网精品带宽续费。
     */
    RenewNetworkPackages(query: RenewNetworkPackagesRequest): Promise<RenewNetworkPackagesResponse>;
    /**
     * 查询云电脑的流入带宽和流出带宽，或是公网精品带宽的公网访问流入带宽和流出带宽监控数据。
     */
    DescribeFlowMetric(query: DescribeFlowMetricRequest): Promise<DescribeFlowMetricResponse>;
    /**
     * 创建企业网盘（原无影云盘）。
     */
    CreateCloudDriveService(query: CreateCloudDriveServiceRequest): Promise<CreateCloudDriveServiceResponse>;
    /**
     * 修改公网精品带宽的带宽大小。
     */
    ModifyNetworkPackageBandwidth(query: ModifyNetworkPackageBandwidthRequest): Promise<ModifyNetworkPackageBandwidthResponse>;
    /**
     * 导出客户端事件列表。
     */
    ExportClientEvents(query: ExportClientEventsRequest): Promise<ExportClientEventsResponse>;
    /**
     * 上传用户的自定义Windows镜像。
     */
    UploadImage(query: UploadImageRequest): Promise<UploadImageResponse>;
    /**
     * 禁用云电脑池中的云电脑。禁用后，云电脑的状态变为unavailable。
     */
    DisableDesktopsInGroup(query: DisableDesktopsInGroupRequest): Promise<DisableDesktopsInGroupResponse>;
    /**
     * 将云电脑从当前所属办公网络（原工作区）迁移到新的办公网络。
     */
    MigrateDesktops(query: MigrateDesktopsRequest): Promise<MigrateDesktopsResponse>;
    /**
     * 设置云电脑池定时任务，执行定时开机、关机、重启或重置任务。
     */
    SetDesktopGroupTimer(query: SetDesktopGroupTimerRequest): Promise<SetDesktopGroupTimerResponse>;
    /**
     * 设置云电脑池定时任务的状态，例如将定时任务设为启用或禁用。
     */
    SetDesktopGroupTimerStatus(query: SetDesktopGroupTimerStatusRequest): Promise<SetDesktopGroupTimerStatusResponse>;
    /**
     * 允许升级镜像。
     */
    ApproveFotaUpdate(query: ApproveFotaUpdateRequest): Promise<ApproveFotaUpdateResponse>;
    /**
     * 获取可升级到指定版本镜像但尚未升级的云电脑信息。
     */
    DescribeFotaPendingDesktops(query: DescribeFotaPendingDesktopsRequest): Promise<DescribeFotaPendingDesktopsResponse>;
    /**
     * 为镜像升级任务打开或关闭自动推送。
     */
    UpdateFotaTask(query: UpdateFotaTaskRequest): Promise<UpdateFotaTaskResponse>;
    /**
     * 获取镜像升级任务列表。
     */
    DescribeFotaTasks(query: DescribeFotaTasksRequest): Promise<DescribeFotaTasksResponse>;
    /**
     * 查询录屏文件的详细信息。
     */
    DescribeRecordings(query: DescribeRecordingsRequest): Promise<DescribeRecordingsResponse>;
    /**
     * 查询云电脑的镜像变更记录。
     */
    DescribeImageModifiedRecords(query: DescribeImageModifiedRecordsRequest): Promise<DescribeImageModifiedRecordsResponse>;
    /**
     * 开启磁盘加密功能，在用户RAM下添加无影云盘加密的服务关联角色（SLR）。
     */
    CreateDiskEncryptionService(query: CreateDiskEncryptionServiceRequest): Promise<CreateDiskEncryptionServiceResponse>;
    /**
     * 查询用户KMS密钥列表。如果是第一次访问，将尝试创建一个EDS的服务密钥，并返回结果。
     */
    DescribeKmsKeys(query: DescribeKmsKeysRequest): Promise<DescribeKmsKeysResponse>;
    /**
     * 获取当前镜像已共享的阿里云账号列表。
     */
    DescribeImagePermission(query: DescribeImagePermissionRequest): Promise<DescribeImagePermissionResponse>;
    /**
     * 取消将镜像复制至另一地域的操作。
     */
    CancelCopyImage(query: CancelCopyImageRequest): Promise<CancelCopyImageResponse>;
    /**
     * 将镜像复制到另一地域。如需跨地域分享镜像，可以先调用本接口将镜像复制到新地域再进行分享。
     */
    CopyImage(query: CopyImageRequest): Promise<CopyImageResponse>;
    /**
     * 将镜像共享给无影的其他用户或者取消已经共享的镜像。
     */
    ModifyImagePermission(query: ModifyImagePermissionRequest): Promise<ModifyImagePermissionResponse>;
    /**
     * 获取单一办公网络下云电脑粒度的流量统计数据。
     */
    DescribeFlowStatistic(query: DescribeFlowStatisticRequest): Promise<DescribeFlowStatisticResponse>;
    /**
     * 重置云电脑池内的云电脑。
     */
    ResetDesktops(query: ResetDesktopsRequest): Promise<ResetDesktopsResponse>;
    /**
     * 将公网精品带宽绑定至办公网络。公网精品带宽和办公网络是一对一的绑定关系。
     */
    AssociateNetworkPackage(query: AssociateNetworkPackageRequest): Promise<AssociateNetworkPackageResponse>;
    /**
     * 将公网精品带宽与此前绑定的办公网络解绑。
     */
    DissociateNetworkPackage(query: DissociateNetworkPackageRequest): Promise<DissociateNetworkPackageResponse>;
    /**
     * 变更云桌面配置，包括修改vCPU和内存规格，扩容磁盘，以及添加磁盘。
     */
    ModifyDiskSpec(query: ModifyDiskSpecRequest): Promise<ModifyDiskSpecResponse>;
    /**
     * 查询云电脑指定授权用户的应用和进程信息。
     */
    DescribeGuestApplications(query: DescribeGuestApplicationsRequest): Promise<DescribeGuestApplicationsResponse>;
    /**
     * 查询云电脑的详细会话信息。
     */
    DescribeDesktopSessions(query: DescribeDesktopSessionsRequest): Promise<DescribeDesktopSessionsResponse>;
    /**
     * 申请监控协同。主要用于管理员协助场景和教育场景。
     */
    ApplyCoordinationForMonitoring(query: ApplyCoordinationForMonitoringRequest): Promise<ApplyCoordinationForMonitoringResponse>;
    /**
     * 取消流协同监控。
     */
    CancelCoordinationForMonitoring(query: CancelCoordinationForMonitoringRequest): Promise<CancelCoordinationForMonitoringResponse>;
    /**
     * 获取协同流凭证，用于进行远程协助或共享协同。
     */
    GetCoordinateTicket(query: GetCoordinateTicketRequest): Promise<GetCoordinateTicketResponse>;
    /**
     * 查询指定云电脑的授权用户的密码。
     */
    DescribeUsersPassword(query: DescribeUsersPasswordRequest): Promise<DescribeUsersPasswordResponse>;
    /**
     * 创建或修改云电脑定时任务，例如定时开机、关机、重启、重置等。
     */
    ModifyDesktopTimer(query: ModifyDesktopTimerRequest): Promise<ModifyDesktopTimerResponse>;
    /**
     * 修改用户个人盘的基本属性，例如个人盘的状态、存储峰值等。
     */
    ModifyCloudDriveUsers(query: ModifyCloudDriveUsersRequest): Promise<ModifyCloudDriveUsersResponse>;
    /**
     * 企业网盘的默认策略是所有用户均可从本地设备上传文件至企业网盘，但不可从企业网盘下载文件至本地设备。调用本接口可添加具备例外权限的用户。
     */
    ModifyCloudDrivePermission(query: ModifyCloudDrivePermissionRequest): Promise<ModifyCloudDrivePermissionResponse>;
    /**
     * 查询企业网盘的权限设置详情。
     */
    DescribeCloudDrivePermissions(query: DescribeCloudDrivePermissionsRequest): Promise<DescribeCloudDrivePermissionsResponse>;
    /**
     * 删除企业网盘内的用户个人盘。
     */
    DeleteCloudDriveUsers(query: DeleteCloudDriveUsersRequest): Promise<DeleteCloudDriveUsersResponse>;
    /**
     * 在企业网盘中添加用户个人盘。
     */
    CreateCloudDriveUsers(query: CreateCloudDriveUsersRequest): Promise<CreateCloudDriveUsersResponse>;
    /**
     * 查询企业网盘内所有用户个人盘的列表及基本信息。
     */
    DescribeCloudDriveUsers(query: DescribeCloudDriveUsersRequest): Promise<DescribeCloudDriveUsersResponse>;
    /**
     * 将镜像的协议升级为ASP协议。
     */
    MigrateImageProtocol(query: MigrateImageProtocolRequest): Promise<MigrateImageProtocolResponse>;
    /**
     * 创建nas文件系统并且绑定到桌面组的工作区。
     */
    CreateAndBindNasFileSystem(query: CreateAndBindNasFileSystemRequest): Promise<CreateAndBindNasFileSystemResponse>;
    /**
     * 修改云电脑列表页表头的显示类型（包括必选、显示和隐藏）。
     */
    ModifyCustomizedListHeaders(query: ModifyCustomizedListHeadersRequest): Promise<ModifyCustomizedListHeadersResponse>;
    /**
     * 获取云电脑列表页的表头信息。
     */
    DescribeCustomizedListHeaders(query: DescribeCustomizedListHeadersRequest): Promise<DescribeCustomizedListHeadersResponse>;
    /**
     * 申请流协同操作权限。
     */
    ApplyCoordinatePrivilege(query: ApplyCoordinatePrivilegeRequest): Promise<ApplyCoordinatePrivilegeResponse>;
    /**
     * 取消流协同操作权限。
     */
    RevokeCoordinatePrivilege(query: RevokeCoordinatePrivilegeRequest): Promise<RevokeCoordinatePrivilegeResponse>;
    /**
     * 断开桌面会话。
     */
    DisconnectDesktopSessions(query: DisconnectDesktopSessionsRequest): Promise<DisconnectDesktopSessionsResponse>;
    /**
     * 桌面组会话监控。
     */
    DescribeDesktopGroupSessions(query: DescribeDesktopGroupSessionsRequest): Promise<DescribeDesktopGroupSessionsResponse>;
    /**
     * 删除可信设备。
     */
    DeleteDevices(query: DeleteDevicesRequest): Promise<DeleteDevicesResponse>;
    /**
     * 如果希望硬件终端只能被指定的终端用户登录，您需要开启可信设备认证功能，并为硬件终端添加绑定用户。
     */
    AttachEndUser(query: AttachEndUserRequest): Promise<AttachEndUserResponse>;
    /**
     * 为无影硬件终端移除绑定用户。
     */
    DetachEndUser(query: DetachEndUserRequest): Promise<DetachEndUserResponse>;
    /**
     * 查询可信设备列表。
     */
    DescribeDevices(query: DescribeDevicesRequest): Promise<DescribeDevicesResponse>;
    /**
     * 添加可信设备。
     */
    AddDevices(query: AddDevicesRequest): Promise<AddDevicesResponse>;
    /**
     * 为多会话云电脑设置自动扩缩策略。多会话云电脑允许多个用户同时连接同一台云电脑，可节省成本。
     */
    SetDesktopGroupScaleTimer(query: SetDesktopGroupScaleTimerRequest): Promise<SetDesktopGroupScaleTimerResponse>;
    /**
     * 取消云电脑的自动快照策略。
     */
    CancelAutoSnapshotPolicy(query: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse>;
    /**
     * 修改自动快照策略的配置项，包括策略名称、快照保留时间等。
     */
    ModifyAutoSnapshotPolicy(query: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse>;
    /**
     * 删除自动快照策略。
     */
    DeleteAutoSnapshotPolicy(query: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse>;
    /**
     * 查询自动快照策略。
     */
    DescribeAutoSnapshotPolicy(query: DescribeAutoSnapshotPolicyRequest): Promise<DescribeAutoSnapshotPolicyResponse>;
    /**
     * 创建自动快照策略，让云电脑按照Cron表达式对应的时间自动创建快照。
     */
    CreateAutoSnapshotPolicy(query: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse>;
    /**
     * 为云电脑绑定自动快照策略。绑定后，云电脑将按照自动快照策略规定的时间自动创建快照。
     */
    ApplyAutoSnapshotPolicy(query: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse>;
    /**
     * 在网盘中创建文件夹或者创建文件上传任务。
     */
    CreateCdsFile(query: CreateCdsFileRequest): Promise<CreateCdsFileResponse>;
    /**
     * 创建文件上传任务后，调用本接口完成上传动作。
     */
    CompleteCdsFile(query: CompleteCdsFileRequest): Promise<CompleteCdsFileResponse>;
    /**
     * 查询网盘中的文件列表，以及获取文件的下载链接。
     */
    ListCdsFiles(query: ListCdsFilesRequest): Promise<ListCdsFilesResponse>;
    /**
     * 将网盘内的文件夹取消共享。
     */
    RemoveFilePermission(query: RemoveFilePermissionRequest): Promise<RemoveFilePermissionResponse>;
    /**
     * 在网盘内新增共享的文件夹。
     */
    AddFilePermission(query: AddFilePermissionRequest): Promise<AddFilePermissionResponse>;
    /**
     * 查询网盘中的共享文件夹的权限信息。
     */
    ListFilePermission(query: ListFilePermissionRequest): Promise<ListFilePermissionResponse>;
    /**
     * 修改网盘文件或文件夹的属性，例如文件名。
     */
    ModifyCdsFile(query: ModifyCdsFileRequest): Promise<ModifyCdsFileResponse>;
    /**
     * 删除网盘中的文件或文件夹。
     */
    DeleteCdsFile(query: DeleteCdsFileRequest): Promise<DeleteCdsFileResponse>;
    /**
     * 将网盘中的文件或文件夹移动至新的位置。
     */
    MoveCdsFile(query: MoveCdsFileRequest): Promise<MoveCdsFileResponse>;
    /**
     * 为网盘中的文件或文件夹制作一个副本。
     */
    CopyCdsFile(query: CopyCdsFileRequest): Promise<CopyCdsFileResponse>;
    /**
     * 查询全地域的会话统计信息。
     */
    DescribeSessionStatistic(query: DescribeSessionStatisticRequest): Promise<DescribeSessionStatisticResponse>;
    /**
     * 对云电脑执行唤醒操作。
     */
    WakeupDesktops(query: WakeupDesktopsRequest): Promise<WakeupDesktopsResponse>;
    /**
     * 对云电脑执行休眠操作。
     */
    HibernateDesktops(query: HibernateDesktopsRequest): Promise<HibernateDesktopsResponse>;
    /**
     * 删除团队共享盘。
     */
    DeleteCloudDriveGroups(query: DeleteCloudDriveGroupsRequest): Promise<DeleteCloudDriveGroupsResponse>;
    /**
     * 修改团队共享盘的基本属性，例如共享盘的状态、存储峰值等。
     */
    ModifyCloudDriveGroups(query: ModifyCloudDriveGroupsRequest): Promise<ModifyCloudDriveGroupsResponse>;
    /**
     * 查询企业网盘内所有团队共享盘的列表及基本信息。
     */
    DescribeCloudDriveGroups(query: DescribeCloudDriveGroupsRequest): Promise<DescribeCloudDriveGroupsResponse>;
    /**
     * 创建文件分享。
     */
    CreateCdsFileShareLink(query: CreateCdsFileShareLinkRequest): Promise<CreateCdsFileShareLinkResponse>;
    /**
     * 取消文件分享。
     */
    CancelCdsFileShareLink(query: CancelCdsFileShareLinkRequest): Promise<CancelCdsFileShareLinkResponse>;
    /**
     * 查询文件分享。
     */
    DescribeCdsFileShareLinks(query: DescribeCdsFileShareLinksRequest): Promise<DescribeCdsFileShareLinksResponse>;
    /**
     * 修改文件分享的设置。
     */
    ModifyCdsFileShareLink(query: ModifyCdsFileShareLinkRequest): Promise<ModifyCdsFileShareLinkResponse>;
    /**
     * 根据CopyCdsFile接口获得的AsyncTaskId返回参数获取文件夹复制异步任务的详细信息。
     */
    GetAsyncTask(query: GetAsyncTaskRequest): Promise<GetAsyncTaskResponse>;
    /**
     * 查询办公网络或云电脑粒度上的公网访问控制策略详情。
     */
    DescribeAclEntries(query: DescribeAclEntriesRequest): Promise<DescribeAclEntriesResponse>;
    /**
     * 修改办公网络或云电脑粒度上的公网访问控制策略。
     */
    ModifyAclEntries(query: ModifyAclEntriesRequest): Promise<ModifyAclEntriesResponse>;
    /**
     * 查询云电脑的基础信息。
     */
    DescribeDesktopInfo(query: DescribeDesktopInfoRequest): Promise<DescribeDesktopInfoResponse>;
}
export default ECD;
