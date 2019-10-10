import { RunInstancesRequest } from "./RunInstances/req";
import { RunInstancesResponse } from "./RunInstances/res";
import { CreateHpcClusterRequest } from "./CreateHpcCluster/req";
import { CreateHpcClusterResponse } from "./CreateHpcCluster/res";
import { ModifyInstanceVpcAttributeRequest } from "./ModifyInstanceVpcAttribute/req";
import { ModifyInstanceVpcAttributeResponse } from "./ModifyInstanceVpcAttribute/res";
import { AuthorizeSecurityGroupRequest } from "./AuthorizeSecurityGroup/req";
import { AuthorizeSecurityGroupResponse } from "./AuthorizeSecurityGroup/res";
import { DescribeAutoSnapshotPolicyExRequest } from "./DescribeAutoSnapshotPolicyEx/req";
import { DescribeAutoSnapshotPolicyExResponse } from "./DescribeAutoSnapshotPolicyEx/res";
import { ModifyPrepayInstanceSpecRequest } from "./ModifyPrepayInstanceSpec/req";
import { ModifyPrepayInstanceSpecResponse } from "./ModifyPrepayInstanceSpec/res";
import { ModifyInstanceChargeTypeRequest } from "./ModifyInstanceChargeType/req";
import { ModifyInstanceChargeTypeResponse } from "./ModifyInstanceChargeType/res";
import { StopInvocationRequest } from "./StopInvocation/req";
import { StopInvocationResponse } from "./StopInvocation/res";
import { AuthorizeSecurityGroupEgressRequest } from "./AuthorizeSecurityGroupEgress/req";
import { AuthorizeSecurityGroupEgressResponse } from "./AuthorizeSecurityGroupEgress/res";
import { JoinSecurityGroupRequest } from "./JoinSecurityGroup/req";
import { JoinSecurityGroupResponse } from "./JoinSecurityGroup/res";
import { DescribeSecurityGroupsRequest } from "./DescribeSecurityGroups/req";
import { DescribeSecurityGroupsResponse } from "./DescribeSecurityGroups/res";
import { ImportImageRequest } from "./ImportImage/req";
import { ImportImageResponse } from "./ImportImage/res";
import { ModifySecurityGroupRuleRequest } from "./ModifySecurityGroupRule/req";
import { ModifySecurityGroupRuleResponse } from "./ModifySecurityGroupRule/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ApplyAutoSnapshotPolicyRequest } from "./ApplyAutoSnapshotPolicy/req";
import { ApplyAutoSnapshotPolicyResponse } from "./ApplyAutoSnapshotPolicy/res";
import { DescribeCommandsRequest } from "./DescribeCommands/req";
import { DescribeCommandsResponse } from "./DescribeCommands/res";
import { CancelCopyImageRequest } from "./CancelCopyImage/req";
import { CancelCopyImageResponse } from "./CancelCopyImage/res";
import { DescribeDisksFullStatusRequest } from "./DescribeDisksFullStatus/req";
import { DescribeDisksFullStatusResponse } from "./DescribeDisksFullStatus/res";
import { DescribeSecurityGroupReferencesRequest } from "./DescribeSecurityGroupReferences/req";
import { DescribeSecurityGroupReferencesResponse } from "./DescribeSecurityGroupReferences/res";
import { DescribeAccountAttributesRequest } from "./DescribeAccountAttributes/req";
import { DescribeAccountAttributesResponse } from "./DescribeAccountAttributes/res";
import { ReplaceSystemDiskRequest } from "./ReplaceSystemDisk/req";
import { ReplaceSystemDiskResponse } from "./ReplaceSystemDisk/res";
import { RevokeSecurityGroupEgressRequest } from "./RevokeSecurityGroupEgress/req";
import { RevokeSecurityGroupEgressResponse } from "./RevokeSecurityGroupEgress/res";
import { DescribeLaunchTemplateVersionsRequest } from "./DescribeLaunchTemplateVersions/req";
import { DescribeLaunchTemplateVersionsResponse } from "./DescribeLaunchTemplateVersions/res";
import { DescribeHpcClustersRequest } from "./DescribeHpcClusters/req";
import { DescribeHpcClustersResponse } from "./DescribeHpcClusters/res";
import { DeleteDiskRequest } from "./DeleteDisk/req";
import { DeleteDiskResponse } from "./DeleteDisk/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { DescribeTasksRequest } from "./DescribeTasks/req";
import { DescribeTasksResponse } from "./DescribeTasks/res";
import { CreateSecurityGroupRequest } from "./CreateSecurityGroup/req";
import { CreateSecurityGroupResponse } from "./CreateSecurityGroup/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { AttachDiskRequest } from "./AttachDisk/req";
import { AttachDiskResponse } from "./AttachDisk/res";
import { RevokeSecurityGroupRequest } from "./RevokeSecurityGroup/req";
import { RevokeSecurityGroupResponse } from "./RevokeSecurityGroup/res";
import { DescribeCloudAssistantStatusRequest } from "./DescribeCloudAssistantStatus/req";
import { DescribeCloudAssistantStatusResponse } from "./DescribeCloudAssistantStatus/res";
import { ModifyInstanceNetworkSpecRequest } from "./ModifyInstanceNetworkSpec/req";
import { ModifyInstanceNetworkSpecResponse } from "./ModifyInstanceNetworkSpec/res";
import { CreateImageRequest } from "./CreateImage/req";
import { CreateImageResponse } from "./CreateImage/res";
import { ModifySecurityGroupEgressRuleRequest } from "./ModifySecurityGroupEgressRule/req";
import { ModifySecurityGroupEgressRuleResponse } from "./ModifySecurityGroupEgressRule/res";
import { DescribeClassicLinkInstancesRequest } from "./DescribeClassicLinkInstances/req";
import { DescribeClassicLinkInstancesResponse } from "./DescribeClassicLinkInstances/res";
import { DescribeInstanceHistoryEventsRequest } from "./DescribeInstanceHistoryEvents/req";
import { DescribeInstanceHistoryEventsResponse } from "./DescribeInstanceHistoryEvents/res";
import { StopInstanceRequest } from "./StopInstance/req";
import { StopInstanceResponse } from "./StopInstance/res";
import { DeleteSecurityGroupRequest } from "./DeleteSecurityGroup/req";
import { DeleteSecurityGroupResponse } from "./DeleteSecurityGroup/res";
import { ResizeDiskRequest } from "./ResizeDisk/req";
import { ResizeDiskResponse } from "./ResizeDisk/res";
import { LeaveSecurityGroupRequest } from "./LeaveSecurityGroup/req";
import { LeaveSecurityGroupResponse } from "./LeaveSecurityGroup/res";
import { CreateSimulatedSystemEventsRequest } from "./CreateSimulatedSystemEvents/req";
import { CreateSimulatedSystemEventsResponse } from "./CreateSimulatedSystemEvents/res";
import { RedeployInstanceRequest } from "./RedeployInstance/req";
import { RedeployInstanceResponse } from "./RedeployInstance/res";
import { DescribeSpotPriceHistoryRequest } from "./DescribeSpotPriceHistory/req";
import { DescribeSpotPriceHistoryResponse } from "./DescribeSpotPriceHistory/res";
import { CreateLaunchTemplateVersionRequest } from "./CreateLaunchTemplateVersion/req";
import { CreateLaunchTemplateVersionResponse } from "./CreateLaunchTemplateVersion/res";
import { CancelTaskRequest } from "./CancelTask/req";
import { CancelTaskResponse } from "./CancelTask/res";
import { CreateSnapshotRequest } from "./CreateSnapshot/req";
import { CreateSnapshotResponse } from "./CreateSnapshot/res";
import { DescribePriceRequest } from "./DescribePrice/req";
import { DescribePriceResponse } from "./DescribePrice/res";
import { DeleteLaunchTemplateRequest } from "./DeleteLaunchTemplate/req";
import { DeleteLaunchTemplateResponse } from "./DeleteLaunchTemplate/res";
import { AddTagsRequest } from "./AddTags/req";
import { AddTagsResponse } from "./AddTags/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { DeleteDeploymentSetRequest } from "./DeleteDeploymentSet/req";
import { DeleteDeploymentSetResponse } from "./DeleteDeploymentSet/res";
import { DescribeTaskAttributeRequest } from "./DescribeTaskAttribute/req";
import { DescribeTaskAttributeResponse } from "./DescribeTaskAttribute/res";
import { DetachInstanceRamRoleRequest } from "./DetachInstanceRamRole/req";
import { DetachInstanceRamRoleResponse } from "./DetachInstanceRamRole/res";
import { UnassignPrivateIpAddressesRequest } from "./UnassignPrivateIpAddresses/req";
import { UnassignPrivateIpAddressesResponse } from "./UnassignPrivateIpAddresses/res";
import { DeleteNetworkInterfaceRequest } from "./DeleteNetworkInterface/req";
import { DeleteNetworkInterfaceResponse } from "./DeleteNetworkInterface/res";
import { ExportImageRequest } from "./ExportImage/req";
import { ExportImageResponse } from "./ExportImage/res";
import { CreateLaunchTemplateRequest } from "./CreateLaunchTemplate/req";
import { CreateLaunchTemplateResponse } from "./CreateLaunchTemplate/res";
import { RebootInstanceRequest } from "./RebootInstance/req";
import { RebootInstanceResponse } from "./RebootInstance/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { ImportKeyPairRequest } from "./ImportKeyPair/req";
import { ImportKeyPairResponse } from "./ImportKeyPair/res";
import { ResetDiskRequest } from "./ResetDisk/req";
import { ResetDiskResponse } from "./ResetDisk/res";
import { DescribeInstanceRamRoleRequest } from "./DescribeInstanceRamRole/req";
import { DescribeInstanceRamRoleResponse } from "./DescribeInstanceRamRole/res";
import { CreateNetworkInterfaceRequest } from "./CreateNetworkInterface/req";
import { CreateNetworkInterfaceResponse } from "./CreateNetworkInterface/res";
import { DescribeDeploymentSetsRequest } from "./DescribeDeploymentSets/req";
import { DescribeDeploymentSetsResponse } from "./DescribeDeploymentSets/res";
import { DescribeImageSharePermissionRequest } from "./DescribeImageSharePermission/req";
import { DescribeImageSharePermissionResponse } from "./DescribeImageSharePermission/res";
import { DescribeBandwidthLimitationRequest } from "./DescribeBandwidthLimitation/req";
import { DescribeBandwidthLimitationResponse } from "./DescribeBandwidthLimitation/res";
import { DeleteHpcClusterRequest } from "./DeleteHpcCluster/req";
import { DeleteHpcClusterResponse } from "./DeleteHpcCluster/res";
import { ModifyInstanceAutoReleaseTimeRequest } from "./ModifyInstanceAutoReleaseTime/req";
import { ModifyInstanceAutoReleaseTimeResponse } from "./ModifyInstanceAutoReleaseTime/res";
import { ModifySecurityGroupPolicyRequest } from "./ModifySecurityGroupPolicy/req";
import { ModifySecurityGroupPolicyResponse } from "./ModifySecurityGroupPolicy/res";
import { DescribeSecurityGroupAttributeRequest } from "./DescribeSecurityGroupAttribute/req";
import { DescribeSecurityGroupAttributeResponse } from "./DescribeSecurityGroupAttribute/res";
import { InvokeCommandRequest } from "./InvokeCommand/req";
import { InvokeCommandResponse } from "./InvokeCommand/res";
import { ModifyLaunchTemplateDefaultVersionRequest } from "./ModifyLaunchTemplateDefaultVersion/req";
import { ModifyLaunchTemplateDefaultVersionResponse } from "./ModifyLaunchTemplateDefaultVersion/res";
import { AttachInstanceRamRoleRequest } from "./AttachInstanceRamRole/req";
import { AttachInstanceRamRoleResponse } from "./AttachInstanceRamRole/res";
import { AttachNetworkInterfaceRequest } from "./AttachNetworkInterface/req";
import { AttachNetworkInterfaceResponse } from "./AttachNetworkInterface/res";
import { AssignIpv6AddressesRequest } from "./AssignIpv6Addresses/req";
import { AssignIpv6AddressesResponse } from "./AssignIpv6Addresses/res";
import { CancelAutoSnapshotPolicyRequest } from "./CancelAutoSnapshotPolicy/req";
import { CancelAutoSnapshotPolicyResponse } from "./CancelAutoSnapshotPolicy/res";
import { CreateCommandRequest } from "./CreateCommand/req";
import { CreateCommandResponse } from "./CreateCommand/res";
import { InstallCloudAssistantRequest } from "./InstallCloudAssistant/req";
import { InstallCloudAssistantResponse } from "./InstallCloudAssistant/res";
import { DescribeInstanceTypesRequest } from "./DescribeInstanceTypes/req";
import { DescribeInstanceTypesResponse } from "./DescribeInstanceTypes/res";
import { DescribeUserDataRequest } from "./DescribeUserData/req";
import { DescribeUserDataResponse } from "./DescribeUserData/res";
import { ModifyInstanceDeploymentRequest } from "./ModifyInstanceDeployment/req";
import { ModifyInstanceDeploymentResponse } from "./ModifyInstanceDeployment/res";
import { GetInstanceConsoleOutputRequest } from "./GetInstanceConsoleOutput/req";
import { GetInstanceConsoleOutputResponse } from "./GetInstanceConsoleOutput/res";
import { DescribeDemandsRequest } from "./DescribeDemands/req";
import { DescribeDemandsResponse } from "./DescribeDemands/res";
import { RemoveTagsRequest } from "./RemoveTags/req";
import { RemoveTagsResponse } from "./RemoveTags/res";
import { DescribeEniMonitorDataRequest } from "./DescribeEniMonitorData/req";
import { DescribeEniMonitorDataResponse } from "./DescribeEniMonitorData/res";
import { DescribeInstanceVncUrlRequest } from "./DescribeInstanceVncUrl/req";
import { DescribeInstanceVncUrlResponse } from "./DescribeInstanceVncUrl/res";
import { ModifyInstanceAttributeRequest } from "./ModifyInstanceAttribute/req";
import { ModifyInstanceAttributeResponse } from "./ModifyInstanceAttribute/res";
import { CreateDeploymentSetRequest } from "./CreateDeploymentSet/req";
import { CreateDeploymentSetResponse } from "./CreateDeploymentSet/res";
import { DescribeResourcesModificationRequest } from "./DescribeResourcesModification/req";
import { DescribeResourcesModificationResponse } from "./DescribeResourcesModification/res";
import { DescribeInvocationsRequest } from "./DescribeInvocations/req";
import { DescribeInvocationsResponse } from "./DescribeInvocations/res";
import { CreateAutoSnapshotPolicyRequest } from "./CreateAutoSnapshotPolicy/req";
import { CreateAutoSnapshotPolicyResponse } from "./CreateAutoSnapshotPolicy/res";
import { DescribeDiskMonitorDataRequest } from "./DescribeDiskMonitorData/req";
import { DescribeDiskMonitorDataResponse } from "./DescribeDiskMonitorData/res";
import { DescribeLaunchTemplatesRequest } from "./DescribeLaunchTemplates/req";
import { DescribeLaunchTemplatesResponse } from "./DescribeLaunchTemplates/res";
import { DescribeInstancesFullStatusRequest } from "./DescribeInstancesFullStatus/req";
import { DescribeInstancesFullStatusResponse } from "./DescribeInstancesFullStatus/res";
import { AttachClassicLinkVpcRequest } from "./AttachClassicLinkVpc/req";
import { AttachClassicLinkVpcResponse } from "./AttachClassicLinkVpc/res";
import { ModifySecurityGroupAttributeRequest } from "./ModifySecurityGroupAttribute/req";
import { ModifySecurityGroupAttributeResponse } from "./ModifySecurityGroupAttribute/res";
import { DescribeSnapshotsRequest } from "./DescribeSnapshots/req";
import { DescribeSnapshotsResponse } from "./DescribeSnapshots/res";
import { ModifyHpcClusterAttributeRequest } from "./ModifyHpcClusterAttribute/req";
import { ModifyHpcClusterAttributeResponse } from "./ModifyHpcClusterAttribute/res";
import { ReInitDiskRequest } from "./ReInitDisk/req";
import { ReInitDiskResponse } from "./ReInitDisk/res";
import { ModifyImageAttributeRequest } from "./ModifyImageAttribute/req";
import { ModifyImageAttributeResponse } from "./ModifyImageAttribute/res";
import { DescribeInstanceMonitorDataRequest } from "./DescribeInstanceMonitorData/req";
import { DescribeInstanceMonitorDataResponse } from "./DescribeInstanceMonitorData/res";
import { DescribeImageSupportInstanceTypesRequest } from "./DescribeImageSupportInstanceTypes/req";
import { DescribeImageSupportInstanceTypesResponse } from "./DescribeImageSupportInstanceTypes/res";
import { ModifyDiskAttributeRequest } from "./ModifyDiskAttribute/req";
import { ModifyDiskAttributeResponse } from "./ModifyDiskAttribute/res";
import { DescribeSnapshotsUsageRequest } from "./DescribeSnapshotsUsage/req";
import { DescribeSnapshotsUsageResponse } from "./DescribeSnapshotsUsage/res";
import { DescribeInstanceStatusRequest } from "./DescribeInstanceStatus/req";
import { DescribeInstanceStatusResponse } from "./DescribeInstanceStatus/res";
import { DeleteImageRequest } from "./DeleteImage/req";
import { DeleteImageResponse } from "./DeleteImage/res";
import { ModifyInstanceVncPasswdRequest } from "./ModifyInstanceVncPasswd/req";
import { ModifyInstanceVncPasswdResponse } from "./ModifyInstanceVncPasswd/res";
import { DescribeSnapshotPackageRequest } from "./DescribeSnapshotPackage/req";
import { DescribeSnapshotPackageResponse } from "./DescribeSnapshotPackage/res";
import { DeleteCommandRequest } from "./DeleteCommand/req";
import { DeleteCommandResponse } from "./DeleteCommand/res";
import { DeleteSnapshotRequest } from "./DeleteSnapshot/req";
import { DeleteSnapshotResponse } from "./DeleteSnapshot/res";
import { ModifyDiskChargeTypeRequest } from "./ModifyDiskChargeType/req";
import { ModifyDiskChargeTypeResponse } from "./ModifyDiskChargeType/res";
import { AssignPrivateIpAddressesRequest } from "./AssignPrivateIpAddresses/req";
import { AssignPrivateIpAddressesResponse } from "./AssignPrivateIpAddresses/res";
import { DescribeInstanceTypeFamiliesRequest } from "./DescribeInstanceTypeFamilies/req";
import { DescribeInstanceTypeFamiliesResponse } from "./DescribeInstanceTypeFamilies/res";
import { CreateKeyPairRequest } from "./CreateKeyPair/req";
import { CreateKeyPairResponse } from "./CreateKeyPair/res";
import { CopyImageRequest } from "./CopyImage/req";
import { CopyImageResponse } from "./CopyImage/res";
import { AttachKeyPairRequest } from "./AttachKeyPair/req";
import { AttachKeyPairResponse } from "./AttachKeyPair/res";
import { ModifyAutoSnapshotPolicyExRequest } from "./ModifyAutoSnapshotPolicyEx/req";
import { ModifyAutoSnapshotPolicyExResponse } from "./ModifyAutoSnapshotPolicyEx/res";
import { GetInstanceScreenshotRequest } from "./GetInstanceScreenshot/req";
import { GetInstanceScreenshotResponse } from "./GetInstanceScreenshot/res";
import { DescribeImagesRequest } from "./DescribeImages/req";
import { DescribeImagesResponse } from "./DescribeImages/res";
import { ModifyNetworkInterfaceAttributeRequest } from "./ModifyNetworkInterfaceAttribute/req";
import { ModifyNetworkInterfaceAttributeResponse } from "./ModifyNetworkInterfaceAttribute/res";
import { DetachDiskRequest } from "./DetachDisk/req";
import { DetachDiskResponse } from "./DetachDisk/res";
import { ModifyCommandRequest } from "./ModifyCommand/req";
import { ModifyCommandResponse } from "./ModifyCommand/res";
import { DescribeInstanceAutoRenewAttributeRequest } from "./DescribeInstanceAutoRenewAttribute/req";
import { DescribeInstanceAutoRenewAttributeResponse } from "./DescribeInstanceAutoRenewAttribute/res";
import { AcceptInquiredSystemEventRequest } from "./AcceptInquiredSystemEvent/req";
import { AcceptInquiredSystemEventResponse } from "./AcceptInquiredSystemEvent/res";
import { DeleteLaunchTemplateVersionRequest } from "./DeleteLaunchTemplateVersion/req";
import { DeleteLaunchTemplateVersionResponse } from "./DeleteLaunchTemplateVersion/res";
import { DescribeInvocationResultsRequest } from "./DescribeInvocationResults/req";
import { DescribeInvocationResultsResponse } from "./DescribeInvocationResults/res";
import { CreateDiskRequest } from "./CreateDisk/req";
import { CreateDiskResponse } from "./CreateDisk/res";
import { DetachNetworkInterfaceRequest } from "./DetachNetworkInterface/req";
import { DetachNetworkInterfaceResponse } from "./DetachNetworkInterface/res";
import { DeleteAutoSnapshotPolicyRequest } from "./DeleteAutoSnapshotPolicy/req";
import { DeleteAutoSnapshotPolicyResponse } from "./DeleteAutoSnapshotPolicy/res";
import { CancelSimulatedSystemEventsRequest } from "./CancelSimulatedSystemEvents/req";
import { CancelSimulatedSystemEventsResponse } from "./CancelSimulatedSystemEvents/res";
import { DescribeKeyPairsRequest } from "./DescribeKeyPairs/req";
import { DescribeKeyPairsResponse } from "./DescribeKeyPairs/res";
import { AllocatePublicIpAddressRequest } from "./AllocatePublicIpAddress/req";
import { AllocatePublicIpAddressResponse } from "./AllocatePublicIpAddress/res";
import { StartInstanceRequest } from "./StartInstance/req";
import { StartInstanceResponse } from "./StartInstance/res";
import { ModifyImageSharePermissionRequest } from "./ModifyImageSharePermission/req";
import { ModifyImageSharePermissionResponse } from "./ModifyImageSharePermission/res";
import { ModifyDeploymentSetAttributeRequest } from "./ModifyDeploymentSetAttribute/req";
import { ModifyDeploymentSetAttributeResponse } from "./ModifyDeploymentSetAttribute/res";
import { ConvertNatPublicIpToEipRequest } from "./ConvertNatPublicIpToEip/req";
import { ConvertNatPublicIpToEipResponse } from "./ConvertNatPublicIpToEip/res";
import { DescribeNetworkInterfacesRequest } from "./DescribeNetworkInterfaces/req";
import { DescribeNetworkInterfacesResponse } from "./DescribeNetworkInterfaces/res";
import { DeleteKeyPairsRequest } from "./DeleteKeyPairs/req";
import { DeleteKeyPairsResponse } from "./DeleteKeyPairs/res";
import { DetachKeyPairRequest } from "./DetachKeyPair/req";
import { DetachKeyPairResponse } from "./DetachKeyPair/res";
import { DescribeAvailableResourceRequest } from "./DescribeAvailableResource/req";
import { DescribeAvailableResourceResponse } from "./DescribeAvailableResource/res";
import { DescribeSnapshotLinksRequest } from "./DescribeSnapshotLinks/req";
import { DescribeSnapshotLinksResponse } from "./DescribeSnapshotLinks/res";
import { UnassignIpv6AddressesRequest } from "./UnassignIpv6Addresses/req";
import { UnassignIpv6AddressesResponse } from "./UnassignIpv6Addresses/res";
import { DescribeDisksRequest } from "./DescribeDisks/req";
import { DescribeDisksResponse } from "./DescribeDisks/res";
import { ModifyInstanceAutoRenewAttributeRequest } from "./ModifyInstanceAutoRenewAttribute/req";
import { ModifyInstanceAutoRenewAttributeResponse } from "./ModifyInstanceAutoRenewAttribute/res";
import { DetachClassicLinkVpcRequest } from "./DetachClassicLinkVpc/req";
import { DetachClassicLinkVpcResponse } from "./DetachClassicLinkVpc/res";
import { ModifyInstanceSpecRequest } from "./ModifyInstanceSpec/req";
import { ModifyInstanceSpecResponse } from "./ModifyInstanceSpec/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { ModifySnapshotAttributeRequest } from "./ModifySnapshotAttribute/req";
import { ModifySnapshotAttributeResponse } from "./ModifySnapshotAttribute/res";
import { ReportInstancesStatusRequest } from "./ReportInstancesStatus/req";
import { ReportInstancesStatusResponse } from "./ReportInstancesStatus/res";
import { JoinResourceGroupRequest } from "./JoinResourceGroup/req";
import { JoinResourceGroupResponse } from "./JoinResourceGroup/res";
import { DeleteInstancesRequest } from "./DeleteInstances/req";
import { DeleteInstancesResponse } from "./DeleteInstances/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { DescribeAutoProvisioningGroupHistoryRequest } from "./DescribeAutoProvisioningGroupHistory/req";
import { DescribeAutoProvisioningGroupHistoryResponse } from "./DescribeAutoProvisioningGroupHistory/res";
import { DescribeAutoProvisioningGroupInstancesRequest } from "./DescribeAutoProvisioningGroupInstances/req";
import { DescribeAutoProvisioningGroupInstancesResponse } from "./DescribeAutoProvisioningGroupInstances/res";
import { DeleteAutoProvisioningGroupRequest } from "./DeleteAutoProvisioningGroup/req";
import { DeleteAutoProvisioningGroupResponse } from "./DeleteAutoProvisioningGroup/res";
import { CreateAutoProvisioningGroupRequest } from "./CreateAutoProvisioningGroup/req";
import { CreateAutoProvisioningGroupResponse } from "./CreateAutoProvisioningGroup/res";
import { ModifyAutoProvisioningGroupRequest } from "./ModifyAutoProvisioningGroup/req";
import { ModifyAutoProvisioningGroupResponse } from "./ModifyAutoProvisioningGroup/res";
import { ModifyDiskSpecRequest } from "./ModifyDiskSpec/req";
import { ModifyDiskSpecResponse } from "./ModifyDiskSpec/res";
import { DescribeRecommendInstanceTypeRequest } from "./DescribeRecommendInstanceType/req";
import { DescribeRecommendInstanceTypeResponse } from "./DescribeRecommendInstanceType/res";
import { DescribeAutoProvisioningGroupsRequest } from "./DescribeAutoProvisioningGroups/req";
import { DescribeAutoProvisioningGroupsResponse } from "./DescribeAutoProvisioningGroups/res";
import { DescribeStorageSetsRequest } from "./DescribeStorageSets/req";
import { DescribeStorageSetsResponse } from "./DescribeStorageSets/res";
import { DescribeStorageSetDetailsRequest } from "./DescribeStorageSetDetails/req";
import { DescribeStorageSetDetailsResponse } from "./DescribeStorageSetDetails/res";
import { ModifyStorageSetAttributeRequest } from "./ModifyStorageSetAttribute/req";
import { ModifyStorageSetAttributeResponse } from "./ModifyStorageSetAttribute/res";
import { DescribeInstanceTopologyRequest } from "./DescribeInstanceTopology/req";
import { DescribeInstanceTopologyResponse } from "./DescribeInstanceTopology/res";
import { CreateStorageSetRequest } from "./CreateStorageSet/req";
import { CreateStorageSetResponse } from "./CreateStorageSet/res";
import { DeleteStorageSetRequest } from "./DeleteStorageSet/req";
import { DeleteStorageSetResponse } from "./DeleteStorageSet/res";
import { AllocateDedicatedHostsRequest } from "./AllocateDedicatedHosts/req";
import { AllocateDedicatedHostsResponse } from "./AllocateDedicatedHosts/res";
import { DescribeDedicatedHostTypesRequest } from "./DescribeDedicatedHostTypes/req";
import { DescribeDedicatedHostTypesResponse } from "./DescribeDedicatedHostTypes/res";
import { DescribeDedicatedHostsRequest } from "./DescribeDedicatedHosts/req";
import { DescribeDedicatedHostsResponse } from "./DescribeDedicatedHosts/res";
import { DescribeDedicatedHostAutoRenewRequest } from "./DescribeDedicatedHostAutoRenew/req";
import { DescribeDedicatedHostAutoRenewResponse } from "./DescribeDedicatedHostAutoRenew/res";
import { ModifyDedicatedHostAttributeRequest } from "./ModifyDedicatedHostAttribute/req";
import { ModifyDedicatedHostAttributeResponse } from "./ModifyDedicatedHostAttribute/res";
import { ModifyDedicatedHostAutoRenewAttributeRequest } from "./ModifyDedicatedHostAutoRenewAttribute/req";
import { ModifyDedicatedHostAutoRenewAttributeResponse } from "./ModifyDedicatedHostAutoRenewAttribute/res";
import { ModifyDedicatedHostAutoReleaseTimeRequest } from "./ModifyDedicatedHostAutoReleaseTime/req";
import { ModifyDedicatedHostAutoReleaseTimeResponse } from "./ModifyDedicatedHostAutoReleaseTime/res";
import { ReleaseDedicatedHostRequest } from "./ReleaseDedicatedHost/req";
import { ReleaseDedicatedHostResponse } from "./ReleaseDedicatedHost/res";
import { RenewDedicatedHostsRequest } from "./RenewDedicatedHosts/req";
import { RenewDedicatedHostsResponse } from "./RenewDedicatedHosts/res";
import { AssociateHaVipRequest } from "./AssociateHaVip/req";
import { AssociateHaVipResponse } from "./AssociateHaVip/res";
import { CreateNetworkInterfacePermissionRequest } from "./CreateNetworkInterfacePermission/req";
import { CreateNetworkInterfacePermissionResponse } from "./CreateNetworkInterfacePermission/res";
import { DeleteBandwidthPackageRequest } from "./DeleteBandwidthPackage/req";
import { DeleteBandwidthPackageResponse } from "./DeleteBandwidthPackage/res";
import { DeletePhysicalConnectionRequest } from "./DeletePhysicalConnection/req";
import { DeletePhysicalConnectionResponse } from "./DeletePhysicalConnection/res";
import { DeleteVSwitchRequest } from "./DeleteVSwitch/req";
import { DeleteVSwitchResponse } from "./DeleteVSwitch/res";
import { DescribeEipMonitorDataRequest } from "./DescribeEipMonitorData/req";
import { DescribeEipMonitorDataResponse } from "./DescribeEipMonitorData/res";
import { DescribeFleetHistoryRequest } from "./DescribeFleetHistory/req";
import { DescribeFleetHistoryResponse } from "./DescribeFleetHistory/res";
import { DescribeFleetsRequest } from "./DescribeFleets/req";
import { DescribeFleetsResponse } from "./DescribeFleets/res";
import { DescribeForwardTableEntriesRequest } from "./DescribeForwardTableEntries/req";
import { DescribeForwardTableEntriesResponse } from "./DescribeForwardTableEntries/res";
import { DescribeHaVipsRequest } from "./DescribeHaVips/req";
import { DescribeHaVipsResponse } from "./DescribeHaVips/res";
import { DescribeInstanceAttributeRequest } from "./DescribeInstanceAttribute/req";
import { DescribeInstanceAttributeResponse } from "./DescribeInstanceAttribute/res";
import { DescribeNetworkInterfacePermissionsRequest } from "./DescribeNetworkInterfacePermissions/req";
import { DescribeNetworkInterfacePermissionsResponse } from "./DescribeNetworkInterfacePermissions/res";
import { DescribeRenewalPriceRequest } from "./DescribeRenewalPrice/req";
import { DescribeRenewalPriceResponse } from "./DescribeRenewalPrice/res";
import { DescribeRouteTablesRequest } from "./DescribeRouteTables/req";
import { DescribeRouteTablesResponse } from "./DescribeRouteTables/res";
import { ModifyAutoSnapshotPolicyRequest } from "./ModifyAutoSnapshotPolicy/req";
import { ModifyAutoSnapshotPolicyResponse } from "./ModifyAutoSnapshotPolicy/res";
import { ModifyRouterInterfaceAttributeRequest } from "./ModifyRouterInterfaceAttribute/req";
import { ModifyRouterInterfaceAttributeResponse } from "./ModifyRouterInterfaceAttribute/res";
import { ModifyVpcAttributeRequest } from "./ModifyVpcAttribute/req";
import { ModifyVpcAttributeResponse } from "./ModifyVpcAttribute/res";
import { ReleaseEipAddressRequest } from "./ReleaseEipAddress/req";
import { ReleaseEipAddressResponse } from "./ReleaseEipAddress/res";
import { RemoveBandwidthPackageIpsRequest } from "./RemoveBandwidthPackageIps/req";
import { RemoveBandwidthPackageIpsResponse } from "./RemoveBandwidthPackageIps/res";
import { UnassociateHaVipRequest } from "./UnassociateHaVip/req";
import { UnassociateHaVipResponse } from "./UnassociateHaVip/res";
import { ActivateRouterInterfaceRequest } from "./ActivateRouterInterface/req";
import { ActivateRouterInterfaceResponse } from "./ActivateRouterInterface/res";
import { AddBandwidthPackageIpsRequest } from "./AddBandwidthPackageIps/req";
import { AddBandwidthPackageIpsResponse } from "./AddBandwidthPackageIps/res";
import { AllocateEipAddressRequest } from "./AllocateEipAddress/req";
import { AllocateEipAddressResponse } from "./AllocateEipAddress/res";
import { AssociateEipAddressRequest } from "./AssociateEipAddress/req";
import { AssociateEipAddressResponse } from "./AssociateEipAddress/res";
import { CancelPhysicalConnectionRequest } from "./CancelPhysicalConnection/req";
import { CancelPhysicalConnectionResponse } from "./CancelPhysicalConnection/res";
import { ConnectRouterInterfaceRequest } from "./ConnectRouterInterface/req";
import { ConnectRouterInterfaceResponse } from "./ConnectRouterInterface/res";
import { CreateFleetRequest } from "./CreateFleet/req";
import { CreateFleetResponse } from "./CreateFleet/res";
import { CreateForwardEntryRequest } from "./CreateForwardEntry/req";
import { CreateForwardEntryResponse } from "./CreateForwardEntry/res";
import { CreateHaVipRequest } from "./CreateHaVip/req";
import { CreateHaVipResponse } from "./CreateHaVip/res";
import { CreateNatGatewayRequest } from "./CreateNatGateway/req";
import { CreateNatGatewayResponse } from "./CreateNatGateway/res";
import { CreatePhysicalConnectionRequest } from "./CreatePhysicalConnection/req";
import { CreatePhysicalConnectionResponse } from "./CreatePhysicalConnection/res";
import { CreateRouteEntryRequest } from "./CreateRouteEntry/req";
import { CreateRouteEntryResponse } from "./CreateRouteEntry/res";
import { CreateRouterInterfaceRequest } from "./CreateRouterInterface/req";
import { CreateRouterInterfaceResponse } from "./CreateRouterInterface/res";
import { CreateVSwitchRequest } from "./CreateVSwitch/req";
import { CreateVSwitchResponse } from "./CreateVSwitch/res";
import { CreateVirtualBorderRouterRequest } from "./CreateVirtualBorderRouter/req";
import { CreateVirtualBorderRouterResponse } from "./CreateVirtualBorderRouter/res";
import { CreateVpcRequest } from "./CreateVpc/req";
import { CreateVpcResponse } from "./CreateVpc/res";
import { DeactivateRouterInterfaceRequest } from "./DeactivateRouterInterface/req";
import { DeactivateRouterInterfaceResponse } from "./DeactivateRouterInterface/res";
import { DeleteFleetRequest } from "./DeleteFleet/req";
import { DeleteFleetResponse } from "./DeleteFleet/res";
import { DeleteForwardEntryRequest } from "./DeleteForwardEntry/req";
import { DeleteForwardEntryResponse } from "./DeleteForwardEntry/res";
import { DeleteHaVipRequest } from "./DeleteHaVip/req";
import { DeleteHaVipResponse } from "./DeleteHaVip/res";
import { DeleteNatGatewayRequest } from "./DeleteNatGateway/req";
import { DeleteNatGatewayResponse } from "./DeleteNatGateway/res";
import { DeleteNetworkInterfacePermissionRequest } from "./DeleteNetworkInterfacePermission/req";
import { DeleteNetworkInterfacePermissionResponse } from "./DeleteNetworkInterfacePermission/res";
import { DeleteRouteEntryRequest } from "./DeleteRouteEntry/req";
import { DeleteRouteEntryResponse } from "./DeleteRouteEntry/res";
import { DeleteRouterInterfaceRequest } from "./DeleteRouterInterface/req";
import { DeleteRouterInterfaceResponse } from "./DeleteRouterInterface/res";
import { DeleteVirtualBorderRouterRequest } from "./DeleteVirtualBorderRouter/req";
import { DeleteVirtualBorderRouterResponse } from "./DeleteVirtualBorderRouter/res";
import { DeleteVpcRequest } from "./DeleteVpc/req";
import { DeleteVpcResponse } from "./DeleteVpc/res";
import { DescribeAccessPointsRequest } from "./DescribeAccessPoints/req";
import { DescribeAccessPointsResponse } from "./DescribeAccessPoints/res";
import { DescribeBandwidthPackagesRequest } from "./DescribeBandwidthPackages/req";
import { DescribeBandwidthPackagesResponse } from "./DescribeBandwidthPackages/res";
import { DescribeClustersRequest } from "./DescribeClusters/req";
import { DescribeClustersResponse } from "./DescribeClusters/res";
import { DescribeEipAddressesRequest } from "./DescribeEipAddresses/req";
import { DescribeEipAddressesResponse } from "./DescribeEipAddresses/res";
import { DescribeFleetInstancesRequest } from "./DescribeFleetInstances/req";
import { DescribeFleetInstancesResponse } from "./DescribeFleetInstances/res";
import { DescribeInstanceVncPasswdRequest } from "./DescribeInstanceVncPasswd/req";
import { DescribeInstanceVncPasswdResponse } from "./DescribeInstanceVncPasswd/res";
import { DescribeLimitationRequest } from "./DescribeLimitation/req";
import { DescribeLimitationResponse } from "./DescribeLimitation/res";
import { DescribeNatGatewaysRequest } from "./DescribeNatGateways/req";
import { DescribeNatGatewaysResponse } from "./DescribeNatGateways/res";
import { DescribeNewProjectEipMonitorDataRequest } from "./DescribeNewProjectEipMonitorData/req";
import { DescribeNewProjectEipMonitorDataResponse } from "./DescribeNewProjectEipMonitorData/res";
import { DescribePhysicalConnectionsRequest } from "./DescribePhysicalConnections/req";
import { DescribePhysicalConnectionsResponse } from "./DescribePhysicalConnections/res";
import { DescribeReservedInstancesRequest } from "./DescribeReservedInstances/req";
import { DescribeReservedInstancesResponse } from "./DescribeReservedInstances/res";
import { DescribeResourceByTagsRequest } from "./DescribeResourceByTags/req";
import { DescribeResourceByTagsResponse } from "./DescribeResourceByTags/res";
import { DescribeRouterInterfacesRequest } from "./DescribeRouterInterfaces/req";
import { DescribeRouterInterfacesResponse } from "./DescribeRouterInterfaces/res";
import { DescribeSnapshotMonitorDataRequest } from "./DescribeSnapshotMonitorData/req";
import { DescribeSnapshotMonitorDataResponse } from "./DescribeSnapshotMonitorData/res";
import { DescribeUserBusinessBehaviorRequest } from "./DescribeUserBusinessBehavior/req";
import { DescribeUserBusinessBehaviorResponse } from "./DescribeUserBusinessBehavior/res";
import { DescribeVRoutersRequest } from "./DescribeVRouters/req";
import { DescribeVRoutersResponse } from "./DescribeVRouters/res";
import { DescribeVSwitchesRequest } from "./DescribeVSwitches/req";
import { DescribeVSwitchesResponse } from "./DescribeVSwitches/res";
import { DescribeVirtualBorderRoutersRequest } from "./DescribeVirtualBorderRouters/req";
import { DescribeVirtualBorderRoutersResponse } from "./DescribeVirtualBorderRouters/res";
import { DescribeVirtualBorderRoutersForPhysicalConnectionRequest } from "./DescribeVirtualBorderRoutersForPhysicalConnection/req";
import { DescribeVirtualBorderRoutersForPhysicalConnectionResponse } from "./DescribeVirtualBorderRoutersForPhysicalConnection/res";
import { DescribeVpcsRequest } from "./DescribeVpcs/req";
import { DescribeVpcsResponse } from "./DescribeVpcs/res";
import { EipFillParamsRequest } from "./EipFillParams/req";
import { EipFillParamsResponse } from "./EipFillParams/res";
import { EipFillProductRequest } from "./EipFillProduct/req";
import { EipFillProductResponse } from "./EipFillProduct/res";
import { EipNotifyPaidRequest } from "./EipNotifyPaid/req";
import { EipNotifyPaidResponse } from "./EipNotifyPaid/res";
import { EnablePhysicalConnectionRequest } from "./EnablePhysicalConnection/req";
import { EnablePhysicalConnectionResponse } from "./EnablePhysicalConnection/res";
import { ExportSnapshotRequest } from "./ExportSnapshot/req";
import { ExportSnapshotResponse } from "./ExportSnapshot/res";
import { ImportSnapshotRequest } from "./ImportSnapshot/req";
import { ImportSnapshotResponse } from "./ImportSnapshot/res";
import { ModifyBandwidthPackageSpecRequest } from "./ModifyBandwidthPackageSpec/req";
import { ModifyBandwidthPackageSpecResponse } from "./ModifyBandwidthPackageSpec/res";
import { ModifyEipAddressAttributeRequest } from "./ModifyEipAddressAttribute/req";
import { ModifyEipAddressAttributeResponse } from "./ModifyEipAddressAttribute/res";
import { ModifyFleetRequest } from "./ModifyFleet/req";
import { ModifyFleetResponse } from "./ModifyFleet/res";
import { ModifyForwardEntryRequest } from "./ModifyForwardEntry/req";
import { ModifyForwardEntryResponse } from "./ModifyForwardEntry/res";
import { ModifyHaVipAttributeRequest } from "./ModifyHaVipAttribute/req";
import { ModifyHaVipAttributeResponse } from "./ModifyHaVipAttribute/res";
import { ModifyImageShareGroupPermissionRequest } from "./ModifyImageShareGroupPermission/req";
import { ModifyImageShareGroupPermissionResponse } from "./ModifyImageShareGroupPermission/res";
import { ModifyPhysicalConnectionAttributeRequest } from "./ModifyPhysicalConnectionAttribute/req";
import { ModifyPhysicalConnectionAttributeResponse } from "./ModifyPhysicalConnectionAttribute/res";
import { ModifyReservedInstanceAttributeRequest } from "./ModifyReservedInstanceAttribute/req";
import { ModifyReservedInstanceAttributeResponse } from "./ModifyReservedInstanceAttribute/res";
import { ModifyReservedInstancesRequest } from "./ModifyReservedInstances/req";
import { ModifyReservedInstancesResponse } from "./ModifyReservedInstances/res";
import { ModifyRouterInterfaceSpecRequest } from "./ModifyRouterInterfaceSpec/req";
import { ModifyRouterInterfaceSpecResponse } from "./ModifyRouterInterfaceSpec/res";
import { ModifyUserBusinessBehaviorRequest } from "./ModifyUserBusinessBehavior/req";
import { ModifyUserBusinessBehaviorResponse } from "./ModifyUserBusinessBehavior/res";
import { ModifyVRouterAttributeRequest } from "./ModifyVRouterAttribute/req";
import { ModifyVRouterAttributeResponse } from "./ModifyVRouterAttribute/res";
import { ModifyVSwitchAttributeRequest } from "./ModifyVSwitchAttribute/req";
import { ModifyVSwitchAttributeResponse } from "./ModifyVSwitchAttribute/res";
import { ModifyVirtualBorderRouterAttributeRequest } from "./ModifyVirtualBorderRouterAttribute/req";
import { ModifyVirtualBorderRouterAttributeResponse } from "./ModifyVirtualBorderRouterAttribute/res";
import { PurchaseReservedInstancesOfferingRequest } from "./PurchaseReservedInstancesOffering/req";
import { PurchaseReservedInstancesOfferingResponse } from "./PurchaseReservedInstancesOffering/res";
import { ReActivateInstancesRequest } from "./ReActivateInstances/req";
import { ReActivateInstancesResponse } from "./ReActivateInstances/res";
import { RecoverVirtualBorderRouterRequest } from "./RecoverVirtualBorderRouter/req";
import { RecoverVirtualBorderRouterResponse } from "./RecoverVirtualBorderRouter/res";
import { ReleasePublicIpAddressRequest } from "./ReleasePublicIpAddress/req";
import { ReleasePublicIpAddressResponse } from "./ReleasePublicIpAddress/res";
import { TerminatePhysicalConnectionRequest } from "./TerminatePhysicalConnection/req";
import { TerminatePhysicalConnectionResponse } from "./TerminatePhysicalConnection/res";
import { UnassociateEipAddressRequest } from "./UnassociateEipAddress/req";
import { UnassociateEipAddressResponse } from "./UnassociateEipAddress/res";
import { TerminateVirtualBorderRouterRequest } from "./TerminateVirtualBorderRouter/req";
import { TerminateVirtualBorderRouterResponse } from "./TerminateVirtualBorderRouter/res";
import { RunCommandRequest } from "./RunCommand/req";
import { RunCommandResponse } from "./RunCommand/res";

interface ECS {
    /**
    * 调用RunInstances创建一台或多台按量付费或者包年包月ECS实例。
    */ RunInstances(query: RunInstancesRequest): Promise<RunInstancesResponse>;
    /**
    * 调用CreateHpcCluster创建一个HPC集群。
    */ CreateHpcCluster(query: CreateHpcClusterRequest): Promise<CreateHpcClusterResponse>;
    /**
    * 调用ModifyInstanceVpcAttribute修改一台ECS实例的专有网络VPC属性。
    */ ModifyInstanceVpcAttribute(query: ModifyInstanceVpcAttributeRequest): Promise<ModifyInstanceVpcAttributeResponse>;
    /**
    * 调用AuthorizeSecurityGroup增加一条安全组入方向规则。指定安全组入方向的访问权限，允许或者拒绝其他设备发送入方向流量到安全组里的实例。
    */ AuthorizeSecurityGroup(query: AuthorizeSecurityGroupRequest): Promise<AuthorizeSecurityGroupResponse>;
    /**
    * 调用DescribeAutoSnapshotPolicyEX查询您已创建的自动快照策略。
    */ DescribeAutoSnapshotPolicyEx(query: DescribeAutoSnapshotPolicyExRequest): Promise<DescribeAutoSnapshotPolicyExResponse>;
    /**
    * 调用ModifyPrepayInstanceSpec升级或者降低一台包年包月ECS实例的实例规格，新实例规格将会覆盖实例的整个生命周期。
    */ ModifyPrepayInstanceSpec(query: ModifyPrepayInstanceSpecRequest): Promise<ModifyPrepayInstanceSpecResponse>;
    /**
    * 调用ModifyInstanceChargeType更换一台或者多台ECS实例的计费方式。支持在按量付费实例和包年包月实例间相互转换，同时可以将实例挂载的所有按量付费云盘转换为包年包月云盘。
    */ ModifyInstanceChargeType(query: ModifyInstanceChargeTypeRequest): Promise<ModifyInstanceChargeTypeResponse>;
    /**
    * 调用StopInvocation停止一台或多台ECS实例中一条正在进行中（Running）的云助手命令进程。
    */ StopInvocation(query: StopInvocationRequest): Promise<StopInvocationResponse>;
    /**
    * 调用AuthorizeSecurityGroupEgress增加一条安全组出方向规则。指定安全组出方向的访问权限，允许或者拒绝安全组里的实例发送出方向流量到其他设备。
    */ AuthorizeSecurityGroupEgress(query: AuthorizeSecurityGroupEgressRequest): Promise<AuthorizeSecurityGroupEgressResponse>;
    /**
    * 调用JoinSecurityGroup将一台ECS实例加入到指定的安全组。
    */ JoinSecurityGroup(query: JoinSecurityGroupRequest): Promise<JoinSecurityGroupResponse>;
    /**
    * 调用DescribeSecurityGroups查询您创建的安全组的基本信息，例如安全组ID和安全组描述等。返回列表按照安全组ID降序排列。
    */ DescribeSecurityGroups(query: DescribeSecurityGroupsRequest): Promise<DescribeSecurityGroupsResponse>;
    /**
    * 调用ImportImage导入您已有的镜像文件到云服务器ECS，并作为自定义镜像出现在相应地域中。
    */ ImportImage(query: ImportImageRequest): Promise<ImportImageResponse>;
    /**
    * 调用ModifySecurityGroupRule修改安全组入方向规则的描述信息。如果您还没有增加过安全组规则，可以调用AuthorizeSecurityGroup增加。
    */ ModifySecurityGroupRule(query: ModifySecurityGroupRuleRequest): Promise<ModifySecurityGroupRuleResponse>;
    /**
    * 调用ListTagResources查询一个或多个ECS资源已经绑定的标签列表。
    */ ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
    * 为一块或者多块云盘应用自动快照策略。目标云盘已经应用了自动快照策略时，调用ApplyAutoSnapshotPolicy可以更换云盘当前应用的自动快照策略。
    */ ApplyAutoSnapshotPolicy(query: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse>;
    /**
    * 调用DescribeCommands查询您已经创建的云助手命令。只输入参数Action和RegionId，不输入其他任何请求参数，则默认查询您所有可用的命令（CommandId）。
    */ DescribeCommands(query: DescribeCommandsRequest): Promise<DescribeCommandsResponse>;
    /**
    * 调用CancelCopyImage取消正在进行中的复制镜像（CopyImage）任务。
    */ CancelCopyImage(query: CancelCopyImageRequest): Promise<CancelCopyImageResponse>;
    /**
    * 调用DescribeDisksFullStatus查询一块或多块块存储的全部状态信息。
    */ DescribeDisksFullStatus(query: DescribeDisksFullStatusRequest): Promise<DescribeDisksFullStatusResponse>;
    /**
    * 调用DescribeSecurityGroupReferences查询一个安全组和其他哪些安全组有安全组级别的授权行为。
    */ DescribeSecurityGroupReferences(query: DescribeSecurityGroupReferencesRequest): Promise<DescribeSecurityGroupReferencesResponse>;
    /**
    * 调用DescribeAccountAttributes查询您在一个阿里云地域下能创建的ECS资源配额。包括您能创建的安全组数量、弹性网卡数量、按量付费vCPU核数、抢占式实例vCPU核数、专用宿主机数量、地域网络类型以及账号是否已完成实名认证。
    */ DescribeAccountAttributes(query: DescribeAccountAttributesRequest): Promise<DescribeAccountAttributesResponse>;
    /**
    * 调用ReplaceSystemDisk更换一台ECS实例的系统盘或者操作系统。
    */ ReplaceSystemDisk(query: ReplaceSystemDiskRequest): Promise<ReplaceSystemDiskResponse>;
    /**
    * 调用RevokeSecurityGroupEgress删除一条安全组出方向规则，撤销安全组出方向的访问权限。
    */ RevokeSecurityGroupEgress(query: RevokeSecurityGroupEgressRequest): Promise<RevokeSecurityGroupEgressResponse>;
    /**
    * 调用DescribeLaunchTemplateVersions查询实例启动模板版本。
    */ DescribeLaunchTemplateVersions(query: DescribeLaunchTemplateVersionsRequest): Promise<DescribeLaunchTemplateVersionsResponse>;
    /**
    * 调用DescribeHpcClusters查询您可用的HPC集群。请求参数作为筛选器（Filter）使用，筛选关系为逻辑与（&&）关系，参数之间无依赖关系。
    */ DescribeHpcClusters(query: DescribeHpcClustersRequest): Promise<DescribeHpcClustersResponse>;
    /**
    * 调用DeleteDisk释放一块按量付费数据盘。磁盘类型包括普通云盘、高效云盘、SSD云盘和ESSD云盘。
    */ DeleteDisk(query: DeleteDiskRequest): Promise<DeleteDiskResponse>;
    /**
    * 调用TagResources为指定的ECS资源列表统一创建并绑定标签。
    */ TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
    * 调用DescribeTasks查询一个或多个异步请求的进度。
    */ DescribeTasks(query: DescribeTasksRequest): Promise<DescribeTasksResponse>;
    /**
    * 调用CreateSecurityGroup新建一个安全组。新建的安全组，默认只允许安全组内的实例互相访问，安全组外的一切通信请求会被拒绝。若您想允许其他安全组实例的通信请求，或者来自互联网的访问请求，需要授权安全组权限（AuthorizeSecurityGroup）。
    */ CreateSecurityGroup(query: CreateSecurityGroupRequest): Promise<CreateSecurityGroupResponse>;
    /**
    * 调用UntagResources为指定的ECS资源列表统一解绑并删除标签。
    */ UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
    * 调用AttachDisk为一台ECS实例挂载一块按量付费数据盘。
    */ AttachDisk(query: AttachDiskRequest): Promise<AttachDiskResponse>;
    /**
    * 调用RevokeSecurityGroup删除一条安全组入方向规则，撤销安全组入方向的权限设置。
    */ RevokeSecurityGroup(query: RevokeSecurityGroupRequest): Promise<RevokeSecurityGroupResponse>;
    /**
    * 调用DescribeCloudAssistantStatus查询一台或者多台实例是否安装了云助手客户端。
    */ DescribeCloudAssistantStatus(query: DescribeCloudAssistantStatusRequest): Promise<DescribeCloudAssistantStatusResponse>;
    /**
    * 调用ModifyInstanceNetworkSpec修改实例的带宽配置。当实例现有网络规格不满足要求时，可以通过修改实例的带宽配置提高网络性能。
    */ ModifyInstanceNetworkSpec(query: ModifyInstanceNetworkSpecRequest): Promise<ModifyInstanceNetworkSpecResponse>;
    /**
    * 调用CreateImage创建一份自定义镜像。您可以使用创建的自定义镜像创建ECS实例（RunInstances）或者更换实例的系统盘（ReplaceSystemDisk）。
    */ CreateImage(query: CreateImageRequest): Promise<CreateImageResponse>;
    /**
    * 调用ModifySecurityGroupEgressRule修改安全组出方向规则的描述信息。如果您还没有增加过安全组规则，可以调用 AuthorizeSecurityGroupEgress 增加。
    */ ModifySecurityGroupEgressRule(query: ModifySecurityGroupEgressRuleRequest): Promise<ModifySecurityGroupEgressRuleResponse>;
    /**
    * 调用DescribeClassicLinkInstances查询一台或多台与专有网络 VPC 建立了连接的经典网络类型实例。
    */ DescribeClassicLinkInstances(query: DescribeClassicLinkInstancesRequest): Promise<DescribeClassicLinkInstancesResponse>;
    /**
    * 调用DescribeInstanceHistoryEvents查询指定实例的系统事件信息，默认查询处于非活跃状态的历史系统事件。
    */ DescribeInstanceHistoryEvents(query: DescribeInstanceHistoryEventsRequest): Promise<DescribeInstanceHistoryEventsResponse>;
    /**
    * 调用StopInstance停止运行一台实例。
    */ StopInstance(query: StopInstanceRequest): Promise<StopInstanceResponse>;
    /**
    * 调用DeleteSecurityGroup删除一个安全组。
    */ DeleteSecurityGroup(query: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse>;
    /**
    * 扩容一块数据盘。
    */ ResizeDisk(query: ResizeDiskRequest): Promise<ResizeDiskResponse>;
    /**
    * 调用LeaveSecurityGroup将一台ECS实例移出指定的安全组。
    */ LeaveSecurityGroup(query: LeaveSecurityGroupRequest): Promise<LeaveSecurityGroupResponse>;
    /**
    * 调用CreateSimulatedSystemEvents为一台或多台ECS实例预约模拟系统事件。模拟系统事件相当于事件演习，不会真正执行事件，也不会对ECS实例产生影响。
    */ CreateSimulatedSystemEvents(query: CreateSimulatedSystemEventsRequest): Promise<CreateSimulatedSystemEventsResponse>;
    /**
    * 当ECS实例收到系统事件通知时，调用RedeployInstance可以重新部署这台实例。
    */ RedeployInstance(query: RedeployInstanceRequest): Promise<RedeployInstanceResponse>;
    /**
    * 调用DescribeSpotPriceHistory查询抢占式实例近30天内的历史价格。
    */ DescribeSpotPriceHistory(query: DescribeSpotPriceHistoryRequest): Promise<DescribeSpotPriceHistoryResponse>;
    /**
    * 调用CreateLaunchTemplateVersion根据指定的实例启动模板创建一个版本。
    */ CreateLaunchTemplateVersion(query: CreateLaunchTemplateVersionRequest): Promise<CreateLaunchTemplateVersionResponse>;
    /**
    * 调用CancelTask取消一件正在运行的任务。目前，您能取消正在运行的导入镜像任务（ImportImage）和导出镜像任务（ExportImage）。
    */ CancelTask(query: CancelTaskRequest): Promise<CancelTaskResponse>;
    /**
    * 调用CreateSnapshot为一块云盘创建一份快照。
    */ CreateSnapshot(query: CreateSnapshotRequest): Promise<CreateSnapshotResponse>;
    /**
    * （Beta）调用DescribePrice查询云服务器ECS资源的最新价格。
    */ DescribePrice(query: DescribePriceRequest): Promise<DescribePriceResponse>;
    /**
    * 调用DeleteLaunchTemplate删除一个实例启动模板。
    */ DeleteLaunchTemplate(query: DeleteLaunchTemplateRequest): Promise<DeleteLaunchTemplateResponse>;
    /**
    * 添加或者覆盖一个或者多个标签到云服务器ECS的各项资源上。您可以添加标签到实例、磁盘、快照、镜像、安全组等，便于管理资源。
    */ AddTags(query: AddTagsRequest): Promise<AddTagsResponse>;
    /**
    * 查询可以供您使用的标签。您可以根据资源类型、资源ID、标签键或标签值等条件查询标签，筛选条件之间为逻辑与（&&）关系，返回满足所有筛选条件的标签。
    */ DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    /**
    * 调用DeleteDeploymentSet删除一个部署集。
    */ DeleteDeploymentSet(query: DeleteDeploymentSetRequest): Promise<DeleteDeploymentSetResponse>;
    /**
    * 调用DescribeTaskAttribute查询异步任务的详细信息。目前，可以查询的异步任务有导入镜像（ImportImage）和导出镜像（ExportImage）两种。
    */ DescribeTaskAttribute(query: DescribeTaskAttributeRequest): Promise<DescribeTaskAttributeResponse>;
    /**
    * 调用DetachInstanceRamRole收回一台或多台ECS实例的实例RAM角色。
    */ DetachInstanceRamRole(query: DetachInstanceRamRoleRequest): Promise<DetachInstanceRamRoleResponse>;
    /**
    * 调用UnassignPrivateIpAddresses从一块弹性网卡删除一个或多个辅助私有IP地址。
    */ UnassignPrivateIpAddresses(query: UnassignPrivateIpAddressesRequest): Promise<UnassignPrivateIpAddressesResponse>;
    /**
    * 调用DeleteNetworkInterface删除一个弹性网卡（ENI）。
    */ DeleteNetworkInterface(query: DeleteNetworkInterfaceRequest): Promise<DeleteNetworkInterfaceResponse>;
    /**
    * 调用ExportImage导出您的自定义镜像到与该自定义镜像同一地域的OSS Bucket里。
    */ ExportImage(query: ExportImageRequest): Promise<ExportImageResponse>;
    /**
    * 调用CreateLaunchTemplate创建一个实例启动模板，简称模板。实例启动模板能免除您每次创建实例时都需要填入大量配置参数。
    */ CreateLaunchTemplate(query: CreateLaunchTemplateRequest): Promise<CreateLaunchTemplateResponse>;
    /**
    * 当一台ECS实例处于已停止（Stopped）状态时，调用RebootInstance可以重启这台实例。
    */ RebootInstance(query: RebootInstanceRequest): Promise<RebootInstanceResponse>;
    /**
    * 调用RenewInstance续费一台包年包月ECS实例。
    */ RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    /**
    * 调用DescribeRegions查询您可以使用的阿里云地域。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * 调用DeleteInstance释放一台按量付费实例或者到期的包年包月实例。
    */ DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
    * 调用DescribeInstances查询一台或多台ECS实例的详细信息。
    */ DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    /**
    * 调用ImportKeyPair导入由其他工具产生的RSA密钥对的公钥部分。导入密钥对后，阿里云为您保管公钥部分，您需要自行妥善保存密钥对的私钥部分。
    */ ImportKeyPair(query: ImportKeyPairRequest): Promise<ImportKeyPairResponse>;
    /**
    * 调用ResetDisk使用磁盘的历史快照回滚至某一阶段的磁盘状态。
    */ ResetDisk(query: ResetDiskRequest): Promise<ResetDiskResponse>;
    /**
    * 调用DescribeInstanceRamRole查询一台或者多台ECS实例上的已赋予的实例RAM角色。
    */ DescribeInstanceRamRole(query: DescribeInstanceRamRoleRequest): Promise<DescribeInstanceRamRoleResponse>;
    /**
    * 调用CreateNetworkInterface创建一个弹性网卡（ENI）。
    */ CreateNetworkInterface(query: CreateNetworkInterfaceRequest): Promise<CreateNetworkInterfaceResponse>;
    /**
    * 调用DescribeDeploymentSets查询一个或多个部署集的属性列表。
    */ DescribeDeploymentSets(query: DescribeDeploymentSetsRequest): Promise<DescribeDeploymentSetsResponse>;
    /**
    * 调用DescribeImageSharePermission查询一份自定义镜像已经共享的所有用户。返回结果支持分页显示，每页的信息条目默认为 10 条。
    */ DescribeImageSharePermission(query: DescribeImageSharePermissionRequest): Promise<DescribeImageSharePermissionResponse>;
    /**
    * 调用DescribeBandwidthLimitation查询带宽资源列表。
    */ DescribeBandwidthLimitation(query: DescribeBandwidthLimitationRequest): Promise<DescribeBandwidthLimitationResponse>;
    /**
    * 调用DeleteHpcCluster删除一个HPC集群。
    */ DeleteHpcCluster(query: DeleteHpcClusterRequest): Promise<DeleteHpcClusterResponse>;
    /**
    * 调用ModifyInstanceAutoReleaseTime为一台按量付费ECS实例设定或者取消自动释放时间。设置自动释放时请谨慎操作，配置的时间到期后将自动释放ECS实例。
    */ ModifyInstanceAutoReleaseTime(query: ModifyInstanceAutoReleaseTimeRequest): Promise<ModifyInstanceAutoReleaseTimeResponse>;
    /**
    * 调用ModifySecurityGroupPolicy修改安全组内网连通策略。
    */ ModifySecurityGroupPolicy(query: ModifySecurityGroupPolicyRequest): Promise<ModifySecurityGroupPolicyResponse>;
    /**
    * 调用DescribeSecurityGroupAttribute查询一个安全组的详情。
    */ DescribeSecurityGroupAttribute(query: DescribeSecurityGroupAttributeRequest): Promise<DescribeSecurityGroupAttributeResponse>;
    /**
    * 调用InvokeCommand为一台或多台ECS实例触发一条云助手命令。
    */ InvokeCommand(query: InvokeCommandRequest): Promise<InvokeCommandResponse>;
    /**
    * 调用ModifyLaunchTemplateDefaultVersion切换启动模板的某个版本为该模板的默认版本。如果您在创建实例（RunInstances）时不指定模板版本号，会采用默认版本。
    */ ModifyLaunchTemplateDefaultVersion(query: ModifyLaunchTemplateDefaultVersionRequest): Promise<ModifyLaunchTemplateDefaultVersionResponse>;
    /**
    * 调用AttachInstanceRamRole为一台或多台ECS实例授予 实例RAM角色。如果实例已有RAM角色，则报错提示您不能附加新的角色。
    */ AttachInstanceRamRole(query: AttachInstanceRamRoleRequest): Promise<AttachInstanceRamRoleResponse>;
    /**
    * 调用AttachNetworkInterface附加弹性网卡（ENI）到专有网络（VPC）类型实例上。
    */ AttachNetworkInterface(query: AttachNetworkInterfaceRequest): Promise<AttachNetworkInterfaceResponse>;
    /**
    * 调用AssignIpv6Addresses为弹性网卡分配一个或多个IPv6地址。
    */ AssignIpv6Addresses(query: AssignIpv6AddressesRequest): Promise<AssignIpv6AddressesResponse>;
    /**
    * 调用CancelAutoSnapshotPolicy取消一块或者多块云盘的自动快照策略。
    */ CancelAutoSnapshotPolicy(query: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse>;
    /**
    * 调用CreateCommand新建一条云助手命令。
    */ CreateCommand(query: CreateCommandRequest): Promise<CreateCommandResponse>;
    /**
    * 调用InstallCloudAssistant为一台或多台实例安装云助手客户端。
    */ InstallCloudAssistant(query: InstallCloudAssistantRequest): Promise<InstallCloudAssistantResponse>;
    /**
    * 调用DescribeInstanceTypes查询云服务器ECS提供的实例规格资源。
    */ DescribeInstanceTypes(query: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse>;
    /**
    * 调用DescribeUserData查询一台ECS实例的自定义数据。
    */ DescribeUserData(query: DescribeUserDataRequest): Promise<DescribeUserDataResponse>;
    /**
    * 调用ModifyInstanceDeployment修改ECS实例的宿主机。ECS实例与目标宿主机必须位于同一地域。
    */ ModifyInstanceDeployment(query: ModifyInstanceDeploymentRequest): Promise<ModifyInstanceDeploymentResponse>;
    /**
    * 调用GetInstanceConsoleOutput获取一台实例的系统命令行输出，数据以Base64编码后返回。
    */ GetInstanceConsoleOutput(query: GetInstanceConsoleOutputRequest): Promise<GetInstanceConsoleOutputResponse>;
    /**
    * 调用DescribeDemands查询报备资源的交付及使用状态。您可通过该接口查询客户经理为您报备的资源详情，包括报备资源类型、资源的交付情况、资源的消费情况。
    */ DescribeDemands(query: DescribeDemandsRequest): Promise<DescribeDemandsResponse>;
    /**
    * 从实例、磁盘、快照、镜像或者安全组等解绑一个或多个标签。
    */ RemoveTags(query: RemoveTagsRequest): Promise<RemoveTagsResponse>;
    /**
    * 调用DescribeEniMonitorData查询一块辅助网卡在指定时间段内使用的流量信息。
    */ DescribeEniMonitorData(query: DescribeEniMonitorDataRequest): Promise<DescribeEniMonitorDataResponse>;
    /**
    * 调用DescribeInstanceVncUrl查询一台ECS实例的Web管理终端地址。
    */ DescribeInstanceVncUrl(query: DescribeInstanceVncUrlRequest): Promise<DescribeInstanceVncUrlResponse>;
    /**
    * 调用ModifyInstanceAttribute修改一台ECS实例的部分信息，包括实例密码、名称、描述、主机名和自定义数据等。如果是t5突发性能实例，可以切换这台实例的性能突发模式。
    */ ModifyInstanceAttribute(query: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse>;
    /**
    * 调用CreateDeploymentSet在指定的地域内创建一个部署集。
    */ CreateDeploymentSet(query: CreateDeploymentSetRequest): Promise<CreateDeploymentSetResponse>;
    /**
    * 调用DescribeResourcesModification查询升级和降配实例规格或者系统盘时，某一可用区的可用资源信息。
    */ DescribeResourcesModification(query: DescribeResourcesModificationRequest): Promise<DescribeResourcesModificationResponse>;
    /**
    * 调用DescribeInvocations查询最近两周云助手命令的执行列表和状态。
    */ DescribeInvocations(query: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse>;
    /**
    * 调用CreateAutoSnapshotPolicy创建一条自动快照策略。
    */ CreateAutoSnapshotPolicy(query: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse>;
    /**
    * 调用DescribeDiskMonitorData查询一块云盘指定时间内的使用信息。可查询云盘实用信息包括读IOPS、写IOPS、读带宽（Bps）、写带宽（Bps）、读时延（μs）以及写时延（μs）。若查询的信息中出现内容缺失，是因为我们无法获取该段时间的使用信息，即云盘状态不是使用中（In_Use）。
    */ DescribeDiskMonitorData(query: DescribeDiskMonitorDataRequest): Promise<DescribeDiskMonitorDataResponse>;
    /**
    * 调用DescribeLaunchTemplates查询一个或多个可用的实例启动模板。
    */ DescribeLaunchTemplates(query: DescribeLaunchTemplatesRequest): Promise<DescribeLaunchTemplatesResponse>;
    /**
    * 调用DescribeInstancesFullStatus查询一台或多台实例的全状态信息。全状态信息包括实例状态和实例系统事件状态，其中，实例状态为实例的生命周期状态，实例系统事件为维护事件的健康状态。
    */ DescribeInstancesFullStatus(query: DescribeInstancesFullStatusRequest): Promise<DescribeInstancesFullStatusResponse>;
    /**
    * 调用AttachClassicLinkVpc将一台经典网络类型实例连接到专有网络VPC中，使经典网络类型实例可以和VPC中的云资源私网互通。
    */ AttachClassicLinkVpc(query: AttachClassicLinkVpcRequest): Promise<AttachClassicLinkVpcResponse>;
    /**
    * 调用ModifySecurityGroupAttribute修改指定安全组的属性，包括修改安全组名称和描述。
    */ ModifySecurityGroupAttribute(query: ModifySecurityGroupAttributeRequest): Promise<ModifySecurityGroupAttributeResponse>;
    /**
    * 调用DescribeSnapshots查询一台ECS实例或一块云盘所有的快照列表。InstanceId、DiskId和SnapshotIds不是必需参数，但是可以构建过滤器逻辑，参数之间为逻辑与（And）关系。
    */ DescribeSnapshots(query: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse>;
    /**
    * 调用ModifyHpcClusterAttribute修改一个HPC集群的描述信息。
    */ ModifyHpcClusterAttribute(query: ModifyHpcClusterAttributeRequest): Promise<ModifyHpcClusterAttributeResponse>;
    /**
    * 调用ReInitDisk重新初始化一块云盘到创建时的初始状态。
    */ ReInitDisk(query: ReInitDiskRequest): Promise<ReInitDiskResponse>;
    /**
    * 调用ModifyImageAttribute修改一份自定义镜像的名称或描述信息。
    */ ModifyImageAttribute(query: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse>;
    /**
    * 调用DescribeInstanceMonitorData查询一台 ECS 实例所有相关的监控信息。返回的监控内容包括 ECS 实例的 CPU 使用率、接收的数据流量、发送的数据流量、网络流量、平均带宽。当返回信息中缺少部分内容时，可能是由于系统没有获取到相应的信息，比如当时实例处于已停止（Stopped）状态。
    */ DescribeInstanceMonitorData(query: DescribeInstanceMonitorDataRequest): Promise<DescribeInstanceMonitorDataResponse>;
    /**
    * 调用DescribeImageSupportInstanceTypes查询指定镜像支持的实例规格。
    */ DescribeImageSupportInstanceTypes(query: DescribeImageSupportInstanceTypesRequest): Promise<DescribeImageSupportInstanceTypesResponse>;
    /**
    * 调用ModifyDiskAttribute修改您的磁盘的属性或者明细。
    */ ModifyDiskAttribute(query: ModifyDiskAttributeRequest): Promise<ModifyDiskAttributeResponse>;
    /**
    * 调用DescribeSnapshotsUsage查询您在一个地域下的快照数量以及快照容量。
    */ DescribeSnapshotsUsage(query: DescribeSnapshotsUsageRequest): Promise<DescribeSnapshotsUsageResponse>;
    /**
    * 调用DescribeInstanceStatus获取一台或多台ECS实例的状态信息。
    */ DescribeInstanceStatus(query: DescribeInstanceStatusRequest): Promise<DescribeInstanceStatusResponse>;
    /**
    * 调用DeleteImage删除一份自定义镜像。
    */ DeleteImage(query: DeleteImageRequest): Promise<DeleteImageResponse>;
    /**
    * 调用ModifyInstanceVncPasswd修改一台ECS实例的Web管理终端密码。
    */ ModifyInstanceVncPasswd(query: ModifyInstanceVncPasswdRequest): Promise<ModifyInstanceVncPasswdResponse>;
    /**
    * 调用DescribeSnapshotPackage查询您在一个阿里云地域下已经购买的对象存储OSS存储包，存储包可以用于抵扣快照存储容量。
    */ DescribeSnapshotPackage(query: DescribeSnapshotPackageRequest): Promise<DescribeSnapshotPackageResponse>;
    /**
    * 调用DeleteCommand删除一条云助手命令。
    */ DeleteCommand(query: DeleteCommandRequest): Promise<DeleteCommandResponse>;
    /**
    * 调用DeleteSnapshot删除指定的快照。如果需要取消正在创建的快照，也可以调用该接口删除快照，即取消创建快照任务。
    */ DeleteSnapshot(query: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse>;
    /**
    * 调用ModifyDiskChargeType修改一台实例上挂载的一块或最多16块云盘的计费方式。
    */ ModifyDiskChargeType(query: ModifyDiskChargeTypeRequest): Promise<ModifyDiskChargeTypeResponse>;
    /**
    * 调用AssignPrivateIpAddresses为一块弹性网卡分配一个或多个辅助私有IP地址。可以为网卡指定在所属虚拟交换机（VSwitch）的CIDR私有IP地址，或者通过指定私有网络地址数量自动创建私有IP地址。
    */ AssignPrivateIpAddresses(query: AssignPrivateIpAddressesRequest): Promise<AssignPrivateIpAddressesResponse>;
    /**
    * 调用DescribeInstanceTypeFamilies查询云服务器ECS提供的实例规格族资源。
    */ DescribeInstanceTypeFamilies(query: DescribeInstanceTypeFamiliesRequest): Promise<DescribeInstanceTypeFamiliesResponse>;
    /**
    * 调用CreateKeyPair创建一对SSH密钥对。我们会为您保管密钥的公钥部分，并返回未加密的PEM编码的PKCS#8格式私钥。您需要自行妥善保管私钥部分。
    */ CreateKeyPair(query: CreateKeyPairRequest): Promise<CreateKeyPairResponse>;
    /**
    * 调用CopyImage复制一个地域下的自定义镜像到其他地域。您在其他地域可以使用复制后的镜像创建ECS实例（RunInstances）或者更换实例的系统盘（ReplaceSystemDisk）。
    */ CopyImage(query: CopyImageRequest): Promise<CopyImageResponse>;
    /**
    * 调用AttachKeyPair绑定一个SSH密钥对到一台或多台Linux实例。
    */ AttachKeyPair(query: AttachKeyPairRequest): Promise<AttachKeyPairResponse>;
    /**
    * 调用ModifyAutoSnapshotPolicyEx修改一条自动快照策略。修改自动快照策略后，之前已应用该策略的云盘随即执行修改后的自动快照策略。
    */ ModifyAutoSnapshotPolicyEx(query: ModifyAutoSnapshotPolicyExRequest): Promise<ModifyAutoSnapshotPolicyExResponse>;
    /**
    * 调用GetInstanceScreenshot获取实例的截屏信息。
    */ GetInstanceScreenshot(query: GetInstanceScreenshotRequest): Promise<GetInstanceScreenshotResponse>;
    /**
    * 调用DescribeImages查询您可以使用的镜像资源。
    */ DescribeImages(query: DescribeImagesRequest): Promise<DescribeImagesResponse>;
    /**
    * 调用ModifyNetworkInterfaceAttribute修改一个弹性网卡（ENI）的属性。例如，弹性网卡名称、描述以及所属安全组等。
    */ ModifyNetworkInterfaceAttribute(query: ModifyNetworkInterfaceAttributeRequest): Promise<ModifyNetworkInterfaceAttributeResponse>;
    /**
    * 调用DetachDisk从一台实例上卸载一块按量付费磁盘。磁盘类型包括普通云盘、高效云盘和SSD云盘。
    */ DetachDisk(query: DetachDiskRequest): Promise<DetachDiskResponse>;
    /**
    * 修改一条云助手命令相关参数以及命令内容。
    */ ModifyCommand(query: ModifyCommandRequest): Promise<ModifyCommandResponse>;
    /**
    * 调用DescribeInstanceAutoRenewAttribute查询一台或多台包年包月ECS实例自动续费状态。
    */ DescribeInstanceAutoRenewAttribute(query: DescribeInstanceAutoRenewAttributeRequest): Promise<DescribeInstanceAutoRenewAttributeResponse>;
    /**
    * 调用AcceptInquiredSystemEvent接受并授权执行系统事件操作。对问询中（Inquiring）状态的系统事件，接受系统事件的默认操作，授权系统执行默认操作。
    */ AcceptInquiredSystemEvent(query: AcceptInquiredSystemEventRequest): Promise<AcceptInquiredSystemEventResponse>;
    /**
    * 调用DeleteLaunchTemplateVersion删除指定实例启动模板的一个版本。不支持删除默认版本，您需要通过 DeleteLaunchTemplate 删除整个实例启动模板才能删除默认版本。
    */ DeleteLaunchTemplateVersion(query: DeleteLaunchTemplateVersionRequest): Promise<DeleteLaunchTemplateVersionResponse>;
    /**
    * 调用DescribeInvocationResults查看云助手命令的执行结果，在指定ECS实例中的实际执行结果。
    */ DescribeInvocationResults(query: DescribeInvocationResultsRequest): Promise<DescribeInvocationResultsResponse>;
    /**
    * 调用CreateDisk创建一块按量付费或包年包月数据盘。云盘类型包括普通云盘、高效云盘、SSD云盘和ESSD云盘。
    */ CreateDisk(query: CreateDiskRequest): Promise<CreateDiskResponse>;
    /**
    * 调用DetachNetworkInterface从一台实例上分离一个弹性网卡（ENI）。
    */ DetachNetworkInterface(query: DetachNetworkInterfaceRequest): Promise<DetachNetworkInterfaceResponse>;
    /**
    * 删除一条自动快照策略。如果目标自动快照策略已经被应用到磁盘上，删除自动快照策略后，这些磁盘不再执行该策略。
    */ DeleteAutoSnapshotPolicy(query: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse>;
    /**
    * 调用CancelSimulatedSystemEvents取消一件或多件处于Scheduled（计划中）或Executing（执行中）状态的模拟系统事件。取消系统事件后，模拟事件变为Canceled（已取消）状态。
    */ CancelSimulatedSystemEvents(query: CancelSimulatedSystemEventsRequest): Promise<CancelSimulatedSystemEventsResponse>;
    /**
    * 调用DescribeKeyPairs查询一个或多个密钥对。
    */ DescribeKeyPairs(query: DescribeKeyPairsRequest): Promise<DescribeKeyPairsResponse>;
    /**
    * 调用AllocatePublicIpAddress为一台ECS实例分配一个公网IP地址。
    */ AllocatePublicIpAddress(query: AllocatePublicIpAddressRequest): Promise<AllocatePublicIpAddressResponse>;
    /**
    * 调用StartInstance启动一台实例。
    */ StartInstance(query: StartInstanceRequest): Promise<StartInstanceResponse>;
    /**
    * 调用ModifyImageSharePermission管理镜像共享权限。您可以将自己的自定义镜像共享给其他阿里云用户，该用户可以使用共享的自定义镜像创建 ECS 实例（RunInstances）或者更换实例的系统盘（ReplaceSystemDisk）。
    */ ModifyImageSharePermission(query: ModifyImageSharePermissionRequest): Promise<ModifyImageSharePermissionResponse>;
    /**
    * 调用ModifyDeploymentSetAttribute修改一个部署集的名称和描述信息。
    */ ModifyDeploymentSetAttribute(query: ModifyDeploymentSetAttributeRequest): Promise<ModifyDeploymentSetAttributeResponse>;
    /**
    * 调用ConvertNatPublicIpToEip将一台网络类型为专有网络VPC的ECS实例的公网 IP（NatPublicIp）转化为弹性公网IP（EIP）。
    */ ConvertNatPublicIpToEip(query: ConvertNatPublicIpToEipRequest): Promise<ConvertNatPublicIpToEipResponse>;
    /**
    * 调用DescribeNetworkInterfaces查看弹性网卡（ENI）列表。
    */ DescribeNetworkInterfaces(query: DescribeNetworkInterfacesRequest): Promise<DescribeNetworkInterfacesResponse>;
    /**
    * 调用DeleteKeyPairs删除一对或者多对 SSH 密钥对。删除 SSH 密钥对后，我们不再为您保存该 SSH 密钥对，但是已经绑定的实例可以正常使用该 SSH 密钥对，其 SSH 密钥对名称仍然显示在实例详情中。
    */ DeleteKeyPairs(query: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse>;
    /**
    * 调用DetachKeyPair为一台或者多台Linux实例解绑 SSH 密钥对。
    */ DetachKeyPair(query: DetachKeyPairRequest): Promise<DetachKeyPairResponse>;
    /**
    * 调用DescribeAvailableResource查询某一可用区的资源列表。例如，您可以在某一可用区创建实例（RunInstances）或者修改实例规格（ModifyInstanceSpec）时查询该可用区的资源列表。
    */ DescribeAvailableResource(query: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse>;
    /**
    * 调用DescribeSnapshotLinks查询云盘快照链。快照链是一块云盘所有快照组成的关系链，一块云盘对应一条快照链。
    */ DescribeSnapshotLinks(query: DescribeSnapshotLinksRequest): Promise<DescribeSnapshotLinksResponse>;
    /**
    * 若弹性网卡已被分配了IPv6地址，调用UnassignIpv6Addresses可以回收一个或多个IPv6地址。
    */ UnassignIpv6Addresses(query: UnassignIpv6AddressesRequest): Promise<UnassignIpv6AddressesResponse>;
    /**
    * 调用DescribeDisks查询一块或多块您已经创建的云盘以及本地盘。
    */ DescribeDisks(query: DescribeDisksRequest): Promise<DescribeDisksResponse>;
    /**
    * 调用ModifyInstanceAutoRenewAttribute设置一台或多台包年包月实例的自动续费状态。为了减少您的资源到期维护成本，包年包月ECS实例可以设置自动续费。
    */ ModifyInstanceAutoRenewAttribute(query: ModifyInstanceAutoRenewAttributeRequest): Promise<ModifyInstanceAutoRenewAttributeResponse>;
    /**
    * 调用DetachClassicLinkVpc取消经典网络类型实例与专有网络 VPC 的连接（ClassicLink）。取消 ClassicLink 后，经典网络类型实例无法与 VPC 互通。
    */ DetachClassicLinkVpc(query: DetachClassicLinkVpcRequest): Promise<DetachClassicLinkVpcResponse>;
    /**
    * 调用ModifyInstanceSpec调整一台按量付费ECS实例的实例规格和公网带宽大小。
    */ ModifyInstanceSpec(query: ModifyInstanceSpecRequest): Promise<ModifyInstanceSpecResponse>;
    /**
    * 调用CreateInstance创建一台包年包月或者按量付费ECS实例。
    */ CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
    * 调用ModifySnapshotAttribute修改一份快照的名称或描述。
    */ ModifySnapshotAttribute(query: ModifySnapshotAttributeRequest): Promise<ModifySnapshotAttributeResponse>;
    /**
    * 调用ReportInstancesStatus反馈一台或者多台ECS实例的异常问题。您可以反馈多台ECS实例发生的相同问题，也可以反馈一台ECS实例的多块磁盘发生的相同问题。
    */ ReportInstancesStatus(query: ReportInstancesStatusRequest): Promise<ReportInstancesStatusResponse>;
    /**
    * 调用JoinResourceGroup将一个ECS资源或者服务加入另一个资源组。
    */ JoinResourceGroup(query: JoinResourceGroupRequest): Promise<JoinResourceGroupResponse>;
    /**
    * 调用DeleteInstances释放一台或多台按量付费ECS实例或者到期的包年包月ECS实例。
    */ DeleteInstances(query: DeleteInstancesRequest): Promise<DeleteInstancesResponse>;
    /**
    * 调用DescribeZones查询一个阿里云地域下的可用区。
    */ DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
    * 调用DescribeAutoProvisioningGroupHistory接口查询弹性供应组的调度任务信息。
    */ DescribeAutoProvisioningGroupHistory(query: DescribeAutoProvisioningGroupHistoryRequest): Promise<DescribeAutoProvisioningGroupHistoryResponse>;
    /**
    * 调用DescribeAutoProvisioningGroupInstances查询指定弹性供应组下的实例。
    */ DescribeAutoProvisioningGroupInstances(query: DescribeAutoProvisioningGroupInstancesRequest): Promise<DescribeAutoProvisioningGroupInstancesResponse>;
    /**
    * 调用DeleteAutoProvisioningGroup接口删除一个弹性供应组。
    */ DeleteAutoProvisioningGroup(query: DeleteAutoProvisioningGroupRequest): Promise<DeleteAutoProvisioningGroupResponse>;
    /**
    * 调用CreateAutoProvisioningGroup接口创建一个弹性供应组。
    */ CreateAutoProvisioningGroup(query: CreateAutoProvisioningGroupRequest): Promise<CreateAutoProvisioningGroupResponse>;
    /**
    * 调用ModifyAutoProvisioningGroup接口修改一个弹性供应组的设置。
    */ ModifyAutoProvisioningGroup(query: ModifyAutoProvisioningGroupRequest): Promise<ModifyAutoProvisioningGroupResponse>;
    /**
    * 调用ModifyDiskSpec升级一块ESSD云盘的性能等级。
    */ ModifyDiskSpec(query: ModifyDiskSpecRequest): Promise<ModifyDiskSpecResponse>;
    /**
    * （Beta）调用DescribeRecommendInstanceType根据一个指定的的实例规格，查找一个或多个备选的实例规格。针对已经或者即将停售的实例规格，DescribeRecommendInstanceType会罗列出作为替补的所有实例规格。
    */ DescribeRecommendInstanceType(query: DescribeRecommendInstanceTypeRequest): Promise<DescribeRecommendInstanceTypeResponse>;
    /**
    * 调用DescribeAutoProvisioningGroups接口查询弹性供应组。
    */ DescribeAutoProvisioningGroups(query: DescribeAutoProvisioningGroupsRequest): Promise<DescribeAutoProvisioningGroupsResponse>;
    /**
    * （Beta）调用DescribeStorageSets查询一个或多个存储集信息，包括所属地域、所属可用区、创建时间和最大分区数等信息。
    */ DescribeStorageSets(query: DescribeStorageSetsRequest): Promise<DescribeStorageSetsResponse>;
    /**
    * （Beta）调用DescribeStorageSetDetails查询一个存储集内云盘或共享块存储的详细信息。
    */ DescribeStorageSetDetails(query: DescribeStorageSetDetailsRequest): Promise<DescribeStorageSetDetailsResponse>;
    /**
    * （Beta）调用ModifyStorageSetAttribute修改一个存储集的名称或描述信息。
    */ ModifyStorageSetAttribute(query: ModifyStorageSetAttributeRequest): Promise<ModifyStorageSetAttributeResponse>;
    /**
    * （Beta）调用DescribeInstanceTopology查询实例所在宿主机的拓扑结构。
    */ DescribeInstanceTopology(query: DescribeInstanceTopologyRequest): Promise<DescribeInstanceTopologyResponse>;
    /**
    * （Beta）调用CreateStorageSet在指定地域的可用区下创建一个存储集。
    */ CreateStorageSet(query: CreateStorageSetRequest): Promise<CreateStorageSetResponse>;
    /**
    * （Beta）调用DeleteStorageSet删除一个空的存储集。待删除的存储集必须为空，不能包含云盘或者共享块存储。
    */ DeleteStorageSet(query: DeleteStorageSetRequest): Promise<DeleteStorageSetResponse>;
    /**
    * 调用AllocateDedicatedHosts创建一台或多台包年包月专有宿主机。专有宿主机DDH是由单租户独享的物理机资源，您可以在专有宿主机上自行创建ECS实例和获取物理服务器属性信息等。
    */ AllocateDedicatedHosts(query: AllocateDedicatedHostsRequest): Promise<AllocateDedicatedHostsResponse>;
    /**
    * 调用DescribeDedicatedHostTypes查询指定地域下支持的专有宿主机规格详细参数，或者查询专有宿主机支持的ECS实例规格族。
    */ DescribeDedicatedHostTypes(query: DescribeDedicatedHostTypesRequest): Promise<DescribeDedicatedHostTypesResponse>;
    /**
    * 调用DescribeDedicatedHosts查询一台或多台专有宿主机的详细信息，包括专有宿主机的物理性能指标、虚拟机器码、使用状态和已创建的ECS实例列表等。
    */ DescribeDedicatedHosts(query: DescribeDedicatedHostsRequest): Promise<DescribeDedicatedHostsResponse>;
    /**
    * 调用DescribeDedicatedHostAutoRenew查询一台或多台包年包月专有宿主机自动续费状态。
    */ DescribeDedicatedHostAutoRenew(query: DescribeDedicatedHostAutoRenewRequest): Promise<DescribeDedicatedHostAutoRenewResponse>;
    /**
    * 调用ModifyDedicatedHostAttribute修改一台专有宿主机的部分信息，包括专有宿主机的名称、描述和服务不可用属性等。
    */ ModifyDedicatedHostAttribute(query: ModifyDedicatedHostAttributeRequest): Promise<ModifyDedicatedHostAttributeResponse>;
    /**
    * 调用ModifyDedicatedHostAutoRenewAttribute为一台或多台包年包月专有宿主机设置自动续费，也可以取消已设定的自动续费。
    */ ModifyDedicatedHostAutoRenewAttribute(query: ModifyDedicatedHostAutoRenewAttributeRequest): Promise<ModifyDedicatedHostAutoRenewAttributeResponse>;
    /**
    * 调用ModifyDedicatedHostAutoReleaseTime为一台按量付费专有宿主机设定自动释放时间，或者取消自动释放一台按量付费专有宿主机。
    */ ModifyDedicatedHostAutoReleaseTime(query: ModifyDedicatedHostAutoReleaseTimeRequest): Promise<ModifyDedicatedHostAutoReleaseTimeResponse>;
    /**
    * 调用ReleaseDedicatedHost释放一台按量付费专有宿主机。
    */ ReleaseDedicatedHost(query: ReleaseDedicatedHostRequest): Promise<ReleaseDedicatedHostResponse>;
    /**
    * 调用RenewDedicatedHosts续费一台或者多台包年包月专有宿主机。
    */ RenewDedicatedHosts(query: RenewDedicatedHostsRequest): Promise<RenewDedicatedHostsResponse>;
    AssociateHaVip(query: AssociateHaVipRequest): Promise<AssociateHaVipResponse>;
    CreateNetworkInterfacePermission(query: CreateNetworkInterfacePermissionRequest): Promise<CreateNetworkInterfacePermissionResponse>;
    DeleteBandwidthPackage(query: DeleteBandwidthPackageRequest): Promise<DeleteBandwidthPackageResponse>;
    DeletePhysicalConnection(query: DeletePhysicalConnectionRequest): Promise<DeletePhysicalConnectionResponse>;
    DeleteVSwitch(query: DeleteVSwitchRequest): Promise<DeleteVSwitchResponse>;
    DescribeEipMonitorData(query: DescribeEipMonitorDataRequest): Promise<DescribeEipMonitorDataResponse>;
    DescribeFleetHistory(query: DescribeFleetHistoryRequest): Promise<DescribeFleetHistoryResponse>;
    DescribeFleets(query: DescribeFleetsRequest): Promise<DescribeFleetsResponse>;
    DescribeForwardTableEntries(query: DescribeForwardTableEntriesRequest): Promise<DescribeForwardTableEntriesResponse>;
    DescribeHaVips(query: DescribeHaVipsRequest): Promise<DescribeHaVipsResponse>;
    DescribeInstanceAttribute(query: DescribeInstanceAttributeRequest): Promise<DescribeInstanceAttributeResponse>;
    DescribeNetworkInterfacePermissions(query: DescribeNetworkInterfacePermissionsRequest): Promise<DescribeNetworkInterfacePermissionsResponse>;
    DescribeRenewalPrice(query: DescribeRenewalPriceRequest): Promise<DescribeRenewalPriceResponse>;
    DescribeRouteTables(query: DescribeRouteTablesRequest): Promise<DescribeRouteTablesResponse>;
    ModifyAutoSnapshotPolicy(query: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse>;
    ModifyRouterInterfaceAttribute(query: ModifyRouterInterfaceAttributeRequest): Promise<ModifyRouterInterfaceAttributeResponse>;
    ModifyVpcAttribute(query: ModifyVpcAttributeRequest): Promise<ModifyVpcAttributeResponse>;
    ReleaseEipAddress(query: ReleaseEipAddressRequest): Promise<ReleaseEipAddressResponse>;
    RemoveBandwidthPackageIps(query: RemoveBandwidthPackageIpsRequest): Promise<RemoveBandwidthPackageIpsResponse>;
    UnassociateHaVip(query: UnassociateHaVipRequest): Promise<UnassociateHaVipResponse>;
    ActivateRouterInterface(query: ActivateRouterInterfaceRequest): Promise<ActivateRouterInterfaceResponse>;
    AddBandwidthPackageIps(query: AddBandwidthPackageIpsRequest): Promise<AddBandwidthPackageIpsResponse>;
    AllocateEipAddress(query: AllocateEipAddressRequest): Promise<AllocateEipAddressResponse>;
    AssociateEipAddress(query: AssociateEipAddressRequest): Promise<AssociateEipAddressResponse>;
    CancelPhysicalConnection(query: CancelPhysicalConnectionRequest): Promise<CancelPhysicalConnectionResponse>;
    ConnectRouterInterface(query: ConnectRouterInterfaceRequest): Promise<ConnectRouterInterfaceResponse>;
    CreateFleet(query: CreateFleetRequest): Promise<CreateFleetResponse>;
    CreateForwardEntry(query: CreateForwardEntryRequest): Promise<CreateForwardEntryResponse>;
    CreateHaVip(query: CreateHaVipRequest): Promise<CreateHaVipResponse>;
    CreateNatGateway(query: CreateNatGatewayRequest): Promise<CreateNatGatewayResponse>;
    CreatePhysicalConnection(query: CreatePhysicalConnectionRequest): Promise<CreatePhysicalConnectionResponse>;
    CreateRouteEntry(query: CreateRouteEntryRequest): Promise<CreateRouteEntryResponse>;
    CreateRouterInterface(query: CreateRouterInterfaceRequest): Promise<CreateRouterInterfaceResponse>;
    CreateVSwitch(query: CreateVSwitchRequest): Promise<CreateVSwitchResponse>;
    CreateVirtualBorderRouter(query: CreateVirtualBorderRouterRequest): Promise<CreateVirtualBorderRouterResponse>;
    CreateVpc(query: CreateVpcRequest): Promise<CreateVpcResponse>;
    DeactivateRouterInterface(query: DeactivateRouterInterfaceRequest): Promise<DeactivateRouterInterfaceResponse>;
    DeleteFleet(query: DeleteFleetRequest): Promise<DeleteFleetResponse>;
    DeleteForwardEntry(query: DeleteForwardEntryRequest): Promise<DeleteForwardEntryResponse>;
    DeleteHaVip(query: DeleteHaVipRequest): Promise<DeleteHaVipResponse>;
    DeleteNatGateway(query: DeleteNatGatewayRequest): Promise<DeleteNatGatewayResponse>;
    DeleteNetworkInterfacePermission(query: DeleteNetworkInterfacePermissionRequest): Promise<DeleteNetworkInterfacePermissionResponse>;
    DeleteRouteEntry(query: DeleteRouteEntryRequest): Promise<DeleteRouteEntryResponse>;
    DeleteRouterInterface(query: DeleteRouterInterfaceRequest): Promise<DeleteRouterInterfaceResponse>;
    DeleteVirtualBorderRouter(query: DeleteVirtualBorderRouterRequest): Promise<DeleteVirtualBorderRouterResponse>;
    DeleteVpc(query: DeleteVpcRequest): Promise<DeleteVpcResponse>;
    DescribeAccessPoints(query: DescribeAccessPointsRequest): Promise<DescribeAccessPointsResponse>;
    DescribeBandwidthPackages(query: DescribeBandwidthPackagesRequest): Promise<DescribeBandwidthPackagesResponse>;
    DescribeClusters(query: DescribeClustersRequest): Promise<DescribeClustersResponse>;
    DescribeEipAddresses(query: DescribeEipAddressesRequest): Promise<DescribeEipAddressesResponse>;
    DescribeFleetInstances(query: DescribeFleetInstancesRequest): Promise<DescribeFleetInstancesResponse>;
    DescribeInstanceVncPasswd(query: DescribeInstanceVncPasswdRequest): Promise<DescribeInstanceVncPasswdResponse>;
    DescribeLimitation(query: DescribeLimitationRequest): Promise<DescribeLimitationResponse>;
    DescribeNatGateways(query: DescribeNatGatewaysRequest): Promise<DescribeNatGatewaysResponse>;
    DescribeNewProjectEipMonitorData(query: DescribeNewProjectEipMonitorDataRequest): Promise<DescribeNewProjectEipMonitorDataResponse>;
    DescribePhysicalConnections(query: DescribePhysicalConnectionsRequest): Promise<DescribePhysicalConnectionsResponse>;
    DescribeReservedInstances(query: DescribeReservedInstancesRequest): Promise<DescribeReservedInstancesResponse>;
    DescribeResourceByTags(query: DescribeResourceByTagsRequest): Promise<DescribeResourceByTagsResponse>;
    DescribeRouterInterfaces(query: DescribeRouterInterfacesRequest): Promise<DescribeRouterInterfacesResponse>;
    DescribeSnapshotMonitorData(query: DescribeSnapshotMonitorDataRequest): Promise<DescribeSnapshotMonitorDataResponse>;
    DescribeUserBusinessBehavior(query: DescribeUserBusinessBehaviorRequest): Promise<DescribeUserBusinessBehaviorResponse>;
    DescribeVRouters(query: DescribeVRoutersRequest): Promise<DescribeVRoutersResponse>;
    DescribeVSwitches(query: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse>;
    DescribeVirtualBorderRouters(query: DescribeVirtualBorderRoutersRequest): Promise<DescribeVirtualBorderRoutersResponse>;
    DescribeVirtualBorderRoutersForPhysicalConnection(query: DescribeVirtualBorderRoutersForPhysicalConnectionRequest): Promise<DescribeVirtualBorderRoutersForPhysicalConnectionResponse>;
    DescribeVpcs(query: DescribeVpcsRequest): Promise<DescribeVpcsResponse>;
    EipFillParams(query: EipFillParamsRequest): Promise<EipFillParamsResponse>;
    EipFillProduct(query: EipFillProductRequest): Promise<EipFillProductResponse>;
    EipNotifyPaid(query: EipNotifyPaidRequest): Promise<EipNotifyPaidResponse>;
    EnablePhysicalConnection(query: EnablePhysicalConnectionRequest): Promise<EnablePhysicalConnectionResponse>;
    ExportSnapshot(query: ExportSnapshotRequest): Promise<ExportSnapshotResponse>;
    ImportSnapshot(query: ImportSnapshotRequest): Promise<ImportSnapshotResponse>;
    ModifyBandwidthPackageSpec(query: ModifyBandwidthPackageSpecRequest): Promise<ModifyBandwidthPackageSpecResponse>;
    ModifyEipAddressAttribute(query: ModifyEipAddressAttributeRequest): Promise<ModifyEipAddressAttributeResponse>;
    ModifyFleet(query: ModifyFleetRequest): Promise<ModifyFleetResponse>;
    ModifyForwardEntry(query: ModifyForwardEntryRequest): Promise<ModifyForwardEntryResponse>;
    ModifyHaVipAttribute(query: ModifyHaVipAttributeRequest): Promise<ModifyHaVipAttributeResponse>;
    ModifyImageShareGroupPermission(query: ModifyImageShareGroupPermissionRequest): Promise<ModifyImageShareGroupPermissionResponse>;
    ModifyPhysicalConnectionAttribute(query: ModifyPhysicalConnectionAttributeRequest): Promise<ModifyPhysicalConnectionAttributeResponse>;
    ModifyReservedInstanceAttribute(query: ModifyReservedInstanceAttributeRequest): Promise<ModifyReservedInstanceAttributeResponse>;
    ModifyReservedInstances(query: ModifyReservedInstancesRequest): Promise<ModifyReservedInstancesResponse>;
    ModifyRouterInterfaceSpec(query: ModifyRouterInterfaceSpecRequest): Promise<ModifyRouterInterfaceSpecResponse>;
    ModifyUserBusinessBehavior(query: ModifyUserBusinessBehaviorRequest): Promise<ModifyUserBusinessBehaviorResponse>;
    ModifyVRouterAttribute(query: ModifyVRouterAttributeRequest): Promise<ModifyVRouterAttributeResponse>;
    ModifyVSwitchAttribute(query: ModifyVSwitchAttributeRequest): Promise<ModifyVSwitchAttributeResponse>;
    ModifyVirtualBorderRouterAttribute(query: ModifyVirtualBorderRouterAttributeRequest): Promise<ModifyVirtualBorderRouterAttributeResponse>;
    PurchaseReservedInstancesOffering(query: PurchaseReservedInstancesOfferingRequest): Promise<PurchaseReservedInstancesOfferingResponse>;
    ReActivateInstances(query: ReActivateInstancesRequest): Promise<ReActivateInstancesResponse>;
    RecoverVirtualBorderRouter(query: RecoverVirtualBorderRouterRequest): Promise<RecoverVirtualBorderRouterResponse>;
    ReleasePublicIpAddress(query: ReleasePublicIpAddressRequest): Promise<ReleasePublicIpAddressResponse>;
    TerminatePhysicalConnection(query: TerminatePhysicalConnectionRequest): Promise<TerminatePhysicalConnectionResponse>;
    UnassociateEipAddress(query: UnassociateEipAddressRequest): Promise<UnassociateEipAddressResponse>;
    TerminateVirtualBorderRouter(query: TerminateVirtualBorderRouterRequest): Promise<TerminateVirtualBorderRouterResponse>;
    RunCommand(query: RunCommandRequest): Promise<RunCommandResponse>;
}
export default ECS;
