import { CreateCenRequest } from "./CreateCen/req";
import { CreateCenResponse } from "./CreateCen/res";
import { ModifyCenAttributeRequest } from "./ModifyCenAttribute/req";
import { ModifyCenAttributeResponse } from "./ModifyCenAttribute/res";
import { DescribeCensRequest } from "./DescribeCens/req";
import { DescribeCensResponse } from "./DescribeCens/res";
import { DeleteCenRequest } from "./DeleteCen/req";
import { DeleteCenResponse } from "./DeleteCen/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { DescribeGrantRulesToResourceRequest } from "./DescribeGrantRulesToResource/req";
import { DescribeGrantRulesToResourceResponse } from "./DescribeGrantRulesToResource/res";
import { OpenTransitRouterServiceRequest } from "./OpenTransitRouterService/req";
import { OpenTransitRouterServiceResponse } from "./OpenTransitRouterService/res";
import { CheckTransitRouterServiceRequest } from "./CheckTransitRouterService/req";
import { CheckTransitRouterServiceResponse } from "./CheckTransitRouterService/res";
import { CreateTransitRouterRequest } from "./CreateTransitRouter/req";
import { CreateTransitRouterResponse } from "./CreateTransitRouter/res";
import { DeleteTransitRouterRequest } from "./DeleteTransitRouter/req";
import { DeleteTransitRouterResponse } from "./DeleteTransitRouter/res";
import { UpdateTransitRouterRequest } from "./UpdateTransitRouter/req";
import { UpdateTransitRouterResponse } from "./UpdateTransitRouter/res";
import { ListTransitRoutersRequest } from "./ListTransitRouters/req";
import { ListTransitRoutersResponse } from "./ListTransitRouters/res";
import { ListTransitRouterAvailableResourceRequest } from "./ListTransitRouterAvailableResource/req";
import { ListTransitRouterAvailableResourceResponse } from "./ListTransitRouterAvailableResource/res";
import { GrantInstanceToTransitRouterRequest } from "./GrantInstanceToTransitRouter/req";
import { GrantInstanceToTransitRouterResponse } from "./GrantInstanceToTransitRouter/res";
import { RevokeInstanceFromTransitRouterRequest } from "./RevokeInstanceFromTransitRouter/req";
import { RevokeInstanceFromTransitRouterResponse } from "./RevokeInstanceFromTransitRouter/res";
import { CreateTransitRouterCidrRequest } from "./CreateTransitRouterCidr/req";
import { CreateTransitRouterCidrResponse } from "./CreateTransitRouterCidr/res";
import { ModifyTransitRouterCidrRequest } from "./ModifyTransitRouterCidr/req";
import { ModifyTransitRouterCidrResponse } from "./ModifyTransitRouterCidr/res";
import { DeleteTransitRouterCidrRequest } from "./DeleteTransitRouterCidr/req";
import { DeleteTransitRouterCidrResponse } from "./DeleteTransitRouterCidr/res";
import { ListTransitRouterCidrRequest } from "./ListTransitRouterCidr/req";
import { ListTransitRouterCidrResponse } from "./ListTransitRouterCidr/res";
import { ListTransitRouterCidrAllocationRequest } from "./ListTransitRouterCidrAllocation/req";
import { ListTransitRouterCidrAllocationResponse } from "./ListTransitRouterCidrAllocation/res";
import { CreateTransitRouterVpcAttachmentRequest } from "./CreateTransitRouterVpcAttachment/req";
import { CreateTransitRouterVpcAttachmentResponse } from "./CreateTransitRouterVpcAttachment/res";
import { DeleteTransitRouterVpcAttachmentRequest } from "./DeleteTransitRouterVpcAttachment/req";
import { DeleteTransitRouterVpcAttachmentResponse } from "./DeleteTransitRouterVpcAttachment/res";
import { UpdateTransitRouterVpcAttachmentAttributeRequest } from "./UpdateTransitRouterVpcAttachmentAttribute/req";
import { UpdateTransitRouterVpcAttachmentAttributeResponse } from "./UpdateTransitRouterVpcAttachmentAttribute/res";
import { UpdateTransitRouterVpcAttachmentZonesRequest } from "./UpdateTransitRouterVpcAttachmentZones/req";
import { UpdateTransitRouterVpcAttachmentZonesResponse } from "./UpdateTransitRouterVpcAttachmentZones/res";
import { ListTransitRouterVpcAttachmentsRequest } from "./ListTransitRouterVpcAttachments/req";
import { ListTransitRouterVpcAttachmentsResponse } from "./ListTransitRouterVpcAttachments/res";
import { CreateTransitRouterVbrAttachmentRequest } from "./CreateTransitRouterVbrAttachment/req";
import { CreateTransitRouterVbrAttachmentResponse } from "./CreateTransitRouterVbrAttachment/res";
import { DeleteTransitRouterVbrAttachmentRequest } from "./DeleteTransitRouterVbrAttachment/req";
import { DeleteTransitRouterVbrAttachmentResponse } from "./DeleteTransitRouterVbrAttachment/res";
import { UpdateTransitRouterVbrAttachmentAttributeRequest } from "./UpdateTransitRouterVbrAttachmentAttribute/req";
import { UpdateTransitRouterVbrAttachmentAttributeResponse } from "./UpdateTransitRouterVbrAttachmentAttribute/res";
import { ListTransitRouterVbrAttachmentsRequest } from "./ListTransitRouterVbrAttachments/req";
import { ListTransitRouterVbrAttachmentsResponse } from "./ListTransitRouterVbrAttachments/res";
import { CreateTransitRouterVpnAttachmentRequest } from "./CreateTransitRouterVpnAttachment/req";
import { CreateTransitRouterVpnAttachmentResponse } from "./CreateTransitRouterVpnAttachment/res";
import { DeleteTransitRouterVpnAttachmentRequest } from "./DeleteTransitRouterVpnAttachment/req";
import { DeleteTransitRouterVpnAttachmentResponse } from "./DeleteTransitRouterVpnAttachment/res";
import { UpdateTransitRouterVpnAttachmentAttributeRequest } from "./UpdateTransitRouterVpnAttachmentAttribute/req";
import { UpdateTransitRouterVpnAttachmentAttributeResponse } from "./UpdateTransitRouterVpnAttachmentAttribute/res";
import { ListTransitRouterVpnAttachmentsRequest } from "./ListTransitRouterVpnAttachments/req";
import { ListTransitRouterVpnAttachmentsResponse } from "./ListTransitRouterVpnAttachments/res";
import { AttachCenChildInstanceRequest } from "./AttachCenChildInstance/req";
import { AttachCenChildInstanceResponse } from "./AttachCenChildInstance/res";
import { DetachCenChildInstanceRequest } from "./DetachCenChildInstance/req";
import { DetachCenChildInstanceResponse } from "./DetachCenChildInstance/res";
import { DescribeCenAttachedChildInstanceAttributeRequest } from "./DescribeCenAttachedChildInstanceAttribute/req";
import { DescribeCenAttachedChildInstanceAttributeResponse } from "./DescribeCenAttachedChildInstanceAttribute/res";
import { DescribeCenAttachedChildInstancesRequest } from "./DescribeCenAttachedChildInstances/req";
import { DescribeCenAttachedChildInstancesResponse } from "./DescribeCenAttachedChildInstances/res";
import { DescribeChildInstanceRegionsRequest } from "./DescribeChildInstanceRegions/req";
import { DescribeChildInstanceRegionsResponse } from "./DescribeChildInstanceRegions/res";
import { DescribeGrantRulesToCenRequest } from "./DescribeGrantRulesToCen/req";
import { DescribeGrantRulesToCenResponse } from "./DescribeGrantRulesToCen/res";
import { ListGrantVSwitchesToCenRequest } from "./ListGrantVSwitchesToCen/req";
import { ListGrantVSwitchesToCenResponse } from "./ListGrantVSwitchesToCen/res";
import { CreateCenBandwidthPackageRequest } from "./CreateCenBandwidthPackage/req";
import { CreateCenBandwidthPackageResponse } from "./CreateCenBandwidthPackage/res";
import { ModifyCenBandwidthPackageAttributeRequest } from "./ModifyCenBandwidthPackageAttribute/req";
import { ModifyCenBandwidthPackageAttributeResponse } from "./ModifyCenBandwidthPackageAttribute/res";
import { ModifyCenBandwidthPackageSpecRequest } from "./ModifyCenBandwidthPackageSpec/req";
import { ModifyCenBandwidthPackageSpecResponse } from "./ModifyCenBandwidthPackageSpec/res";
import { DescribeCenGeographicSpanRemainingBandwidthRequest } from "./DescribeCenGeographicSpanRemainingBandwidth/req";
import { DescribeCenGeographicSpanRemainingBandwidthResponse } from "./DescribeCenGeographicSpanRemainingBandwidth/res";
import { DescribeCenBandwidthPackagesRequest } from "./DescribeCenBandwidthPackages/req";
import { DescribeCenBandwidthPackagesResponse } from "./DescribeCenBandwidthPackages/res";
import { DescribeCenGeographicSpansRequest } from "./DescribeCenGeographicSpans/req";
import { DescribeCenGeographicSpansResponse } from "./DescribeCenGeographicSpans/res";
import { DescribeGeographicRegionMembershipRequest } from "./DescribeGeographicRegionMembership/req";
import { DescribeGeographicRegionMembershipResponse } from "./DescribeGeographicRegionMembership/res";
import { UnassociateCenBandwidthPackageRequest } from "./UnassociateCenBandwidthPackage/req";
import { UnassociateCenBandwidthPackageResponse } from "./UnassociateCenBandwidthPackage/res";
import { AssociateCenBandwidthPackageRequest } from "./AssociateCenBandwidthPackage/req";
import { AssociateCenBandwidthPackageResponse } from "./AssociateCenBandwidthPackage/res";
import { DeleteCenBandwidthPackageRequest } from "./DeleteCenBandwidthPackage/req";
import { DeleteCenBandwidthPackageResponse } from "./DeleteCenBandwidthPackage/res";
import { TempUpgradeCenBandwidthPackageSpecRequest } from "./TempUpgradeCenBandwidthPackageSpec/req";
import { TempUpgradeCenBandwidthPackageSpecResponse } from "./TempUpgradeCenBandwidthPackageSpec/res";
import { CreateTransitRouterPeerAttachmentRequest } from "./CreateTransitRouterPeerAttachment/req";
import { CreateTransitRouterPeerAttachmentResponse } from "./CreateTransitRouterPeerAttachment/res";
import { DeleteTransitRouterPeerAttachmentRequest } from "./DeleteTransitRouterPeerAttachment/req";
import { DeleteTransitRouterPeerAttachmentResponse } from "./DeleteTransitRouterPeerAttachment/res";
import { UpdateTransitRouterPeerAttachmentAttributeRequest } from "./UpdateTransitRouterPeerAttachmentAttribute/req";
import { UpdateTransitRouterPeerAttachmentAttributeResponse } from "./UpdateTransitRouterPeerAttachmentAttribute/res";
import { ListTransitRouterPeerAttachmentsRequest } from "./ListTransitRouterPeerAttachments/req";
import { ListTransitRouterPeerAttachmentsResponse } from "./ListTransitRouterPeerAttachments/res";
import { SetCenInterRegionBandwidthLimitRequest } from "./SetCenInterRegionBandwidthLimit/req";
import { SetCenInterRegionBandwidthLimitResponse } from "./SetCenInterRegionBandwidthLimit/res";
import { DescribeCenInterRegionBandwidthLimitsRequest } from "./DescribeCenInterRegionBandwidthLimits/req";
import { DescribeCenInterRegionBandwidthLimitsResponse } from "./DescribeCenInterRegionBandwidthLimits/res";
import { DescribeCenRegionDomainRouteEntriesRequest } from "./DescribeCenRegionDomainRouteEntries/req";
import { DescribeCenRegionDomainRouteEntriesResponse } from "./DescribeCenRegionDomainRouteEntries/res";
import { DescribeCenChildInstanceRouteEntriesRequest } from "./DescribeCenChildInstanceRouteEntries/req";
import { DescribeCenChildInstanceRouteEntriesResponse } from "./DescribeCenChildInstanceRouteEntries/res";
import { DescribePublishedRouteEntriesRequest } from "./DescribePublishedRouteEntries/req";
import { DescribePublishedRouteEntriesResponse } from "./DescribePublishedRouteEntries/res";
import { DescribeRouteConflictRequest } from "./DescribeRouteConflict/req";
import { DescribeRouteConflictResponse } from "./DescribeRouteConflict/res";
import { PublishRouteEntriesRequest } from "./PublishRouteEntries/req";
import { PublishRouteEntriesResponse } from "./PublishRouteEntries/res";
import { WithdrawPublishedRouteEntriesRequest } from "./WithdrawPublishedRouteEntries/req";
import { WithdrawPublishedRouteEntriesResponse } from "./WithdrawPublishedRouteEntries/res";
import { CreateCenChildInstanceRouteEntryToAttachmentRequest } from "./CreateCenChildInstanceRouteEntryToAttachment/req";
import { CreateCenChildInstanceRouteEntryToAttachmentResponse } from "./CreateCenChildInstanceRouteEntryToAttachment/res";
import { DeleteCenChildInstanceRouteEntryToAttachmentRequest } from "./DeleteCenChildInstanceRouteEntryToAttachment/req";
import { DeleteCenChildInstanceRouteEntryToAttachmentResponse } from "./DeleteCenChildInstanceRouteEntryToAttachment/res";
import { CreateCenChildInstanceRouteEntryToCenRequest } from "./CreateCenChildInstanceRouteEntryToCen/req";
import { CreateCenChildInstanceRouteEntryToCenResponse } from "./CreateCenChildInstanceRouteEntryToCen/res";
import { DeleteCenChildInstanceRouteEntryToCenRequest } from "./DeleteCenChildInstanceRouteEntryToCen/req";
import { DeleteCenChildInstanceRouteEntryToCenResponse } from "./DeleteCenChildInstanceRouteEntryToCen/res";
import { CreateTransitRouterRouteTableRequest } from "./CreateTransitRouterRouteTable/req";
import { CreateTransitRouterRouteTableResponse } from "./CreateTransitRouterRouteTable/res";
import { DeleteTransitRouterRouteTableRequest } from "./DeleteTransitRouterRouteTable/req";
import { DeleteTransitRouterRouteTableResponse } from "./DeleteTransitRouterRouteTable/res";
import { UpdateTransitRouterRouteTableRequest } from "./UpdateTransitRouterRouteTable/req";
import { UpdateTransitRouterRouteTableResponse } from "./UpdateTransitRouterRouteTable/res";
import { ListTransitRouterRouteTablesRequest } from "./ListTransitRouterRouteTables/req";
import { ListTransitRouterRouteTablesResponse } from "./ListTransitRouterRouteTables/res";
import { CreateTransitRouterRouteEntryRequest } from "./CreateTransitRouterRouteEntry/req";
import { CreateTransitRouterRouteEntryResponse } from "./CreateTransitRouterRouteEntry/res";
import { UpdateTransitRouterRouteEntryRequest } from "./UpdateTransitRouterRouteEntry/req";
import { UpdateTransitRouterRouteEntryResponse } from "./UpdateTransitRouterRouteEntry/res";
import { DeleteTransitRouterRouteEntryRequest } from "./DeleteTransitRouterRouteEntry/req";
import { DeleteTransitRouterRouteEntryResponse } from "./DeleteTransitRouterRouteEntry/res";
import { ListTransitRouterRouteEntriesRequest } from "./ListTransitRouterRouteEntries/req";
import { ListTransitRouterRouteEntriesResponse } from "./ListTransitRouterRouteEntries/res";
import { AssociateTransitRouterAttachmentWithRouteTableRequest } from "./AssociateTransitRouterAttachmentWithRouteTable/req";
import { AssociateTransitRouterAttachmentWithRouteTableResponse } from "./AssociateTransitRouterAttachmentWithRouteTable/res";
import { ReplaceTransitRouterRouteTableAssociationRequest } from "./ReplaceTransitRouterRouteTableAssociation/req";
import { ReplaceTransitRouterRouteTableAssociationResponse } from "./ReplaceTransitRouterRouteTableAssociation/res";
import { ListTransitRouterRouteTableAssociationsRequest } from "./ListTransitRouterRouteTableAssociations/req";
import { ListTransitRouterRouteTableAssociationsResponse } from "./ListTransitRouterRouteTableAssociations/res";
import { DissociateTransitRouterAttachmentFromRouteTableRequest } from "./DissociateTransitRouterAttachmentFromRouteTable/req";
import { DissociateTransitRouterAttachmentFromRouteTableResponse } from "./DissociateTransitRouterAttachmentFromRouteTable/res";
import { EnableTransitRouterRouteTablePropagationRequest } from "./EnableTransitRouterRouteTablePropagation/req";
import { EnableTransitRouterRouteTablePropagationResponse } from "./EnableTransitRouterRouteTablePropagation/res";
import { ListTransitRouterRouteTablePropagationsRequest } from "./ListTransitRouterRouteTablePropagations/req";
import { ListTransitRouterRouteTablePropagationsResponse } from "./ListTransitRouterRouteTablePropagations/res";
import { DisableTransitRouterRouteTablePropagationRequest } from "./DisableTransitRouterRouteTablePropagation/req";
import { DisableTransitRouterRouteTablePropagationResponse } from "./DisableTransitRouterRouteTablePropagation/res";
import { CreateCenRouteMapRequest } from "./CreateCenRouteMap/req";
import { CreateCenRouteMapResponse } from "./CreateCenRouteMap/res";
import { DescribeCenRouteMapsRequest } from "./DescribeCenRouteMaps/req";
import { DescribeCenRouteMapsResponse } from "./DescribeCenRouteMaps/res";
import { ModifyCenRouteMapRequest } from "./ModifyCenRouteMap/req";
import { ModifyCenRouteMapResponse } from "./ModifyCenRouteMap/res";
import { DeleteCenRouteMapRequest } from "./DeleteCenRouteMap/req";
import { DeleteCenRouteMapResponse } from "./DeleteCenRouteMap/res";
import { CreateTransitRouterPrefixListAssociationRequest } from "./CreateTransitRouterPrefixListAssociation/req";
import { CreateTransitRouterPrefixListAssociationResponse } from "./CreateTransitRouterPrefixListAssociation/res";
import { DeleteTransitRouterPrefixListAssociationRequest } from "./DeleteTransitRouterPrefixListAssociation/req";
import { DeleteTransitRouterPrefixListAssociationResponse } from "./DeleteTransitRouterPrefixListAssociation/res";
import { ListTransitRouterPrefixListAssociationRequest } from "./ListTransitRouterPrefixListAssociation/req";
import { ListTransitRouterPrefixListAssociationResponse } from "./ListTransitRouterPrefixListAssociation/res";
import { CreateTrafficMarkingPolicyRequest } from "./CreateTrafficMarkingPolicy/req";
import { CreateTrafficMarkingPolicyResponse } from "./CreateTrafficMarkingPolicy/res";
import { UpdateTrafficMarkingPolicyAttributeRequest } from "./UpdateTrafficMarkingPolicyAttribute/req";
import { UpdateTrafficMarkingPolicyAttributeResponse } from "./UpdateTrafficMarkingPolicyAttribute/res";
import { AddTrafficMatchRuleToTrafficMarkingPolicyRequest } from "./AddTrafficMatchRuleToTrafficMarkingPolicy/req";
import { AddTrafficMatchRuleToTrafficMarkingPolicyResponse } from "./AddTrafficMatchRuleToTrafficMarkingPolicy/res";
import { AddTraficMatchRuleToTrafficMarkingPolicyRequest } from "./AddTraficMatchRuleToTrafficMarkingPolicy/req";
import { AddTraficMatchRuleToTrafficMarkingPolicyResponse } from "./AddTraficMatchRuleToTrafficMarkingPolicy/res";
import { RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest } from "./RemoveTrafficMatchRuleFromTrafficMarkingPolicy/req";
import { RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse } from "./RemoveTrafficMatchRuleFromTrafficMarkingPolicy/res";
import { RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest } from "./RemoveTraficMatchRuleFromTrafficMarkingPolicy/req";
import { RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse } from "./RemoveTraficMatchRuleFromTrafficMarkingPolicy/res";
import { DeleteTrafficMarkingPolicyRequest } from "./DeleteTrafficMarkingPolicy/req";
import { DeleteTrafficMarkingPolicyResponse } from "./DeleteTrafficMarkingPolicy/res";
import { ListTrafficMarkingPoliciesRequest } from "./ListTrafficMarkingPolicies/req";
import { ListTrafficMarkingPoliciesResponse } from "./ListTrafficMarkingPolicies/res";
import { CreateCenInterRegionTrafficQosPolicyRequest } from "./CreateCenInterRegionTrafficQosPolicy/req";
import { CreateCenInterRegionTrafficQosPolicyResponse } from "./CreateCenInterRegionTrafficQosPolicy/res";
import { CreateCenInterRegionTrafficQosQueueRequest } from "./CreateCenInterRegionTrafficQosQueue/req";
import { CreateCenInterRegionTrafficQosQueueResponse } from "./CreateCenInterRegionTrafficQosQueue/res";
import { UpdateCenInterRegionTrafficQosPolicyAttributeRequest } from "./UpdateCenInterRegionTrafficQosPolicyAttribute/req";
import { UpdateCenInterRegionTrafficQosPolicyAttributeResponse } from "./UpdateCenInterRegionTrafficQosPolicyAttribute/res";
import { UpdateCenInterRegionTrafficQosQueueAttributeRequest } from "./UpdateCenInterRegionTrafficQosQueueAttribute/req";
import { UpdateCenInterRegionTrafficQosQueueAttributeResponse } from "./UpdateCenInterRegionTrafficQosQueueAttribute/res";
import { DeleteCenInterRegionTrafficQosQueueRequest } from "./DeleteCenInterRegionTrafficQosQueue/req";
import { DeleteCenInterRegionTrafficQosQueueResponse } from "./DeleteCenInterRegionTrafficQosQueue/res";
import { DeleteCenInterRegionTrafficQosPolicyRequest } from "./DeleteCenInterRegionTrafficQosPolicy/req";
import { DeleteCenInterRegionTrafficQosPolicyResponse } from "./DeleteCenInterRegionTrafficQosPolicy/res";
import { ListCenInterRegionTrafficQosPoliciesRequest } from "./ListCenInterRegionTrafficQosPolicies/req";
import { ListCenInterRegionTrafficQosPoliciesResponse } from "./ListCenInterRegionTrafficQosPolicies/res";
import { ResolveAndRouteServiceInCenRequest } from "./ResolveAndRouteServiceInCen/req";
import { ResolveAndRouteServiceInCenResponse } from "./ResolveAndRouteServiceInCen/res";
import { DeleteRouteServiceInCenRequest } from "./DeleteRouteServiceInCen/req";
import { DeleteRouteServiceInCenResponse } from "./DeleteRouteServiceInCen/res";
import { DescribeRouteServicesInCenRequest } from "./DescribeRouteServicesInCen/req";
import { DescribeRouteServicesInCenResponse } from "./DescribeRouteServicesInCen/res";
import { RoutePrivateZoneInCenToVpcRequest } from "./RoutePrivateZoneInCenToVpc/req";
import { RoutePrivateZoneInCenToVpcResponse } from "./RoutePrivateZoneInCenToVpc/res";
import { DescribeCenPrivateZoneRoutesRequest } from "./DescribeCenPrivateZoneRoutes/req";
import { DescribeCenPrivateZoneRoutesResponse } from "./DescribeCenPrivateZoneRoutes/res";
import { UnroutePrivateZoneInCenToVpcRequest } from "./UnroutePrivateZoneInCenToVpc/req";
import { UnroutePrivateZoneInCenToVpcResponse } from "./UnroutePrivateZoneInCenToVpc/res";
import { CreateTransitRouterMulticastDomainRequest } from "./CreateTransitRouterMulticastDomain/req";
import { CreateTransitRouterMulticastDomainResponse } from "./CreateTransitRouterMulticastDomain/res";
import { ModifyTransitRouterMulticastDomainRequest } from "./ModifyTransitRouterMulticastDomain/req";
import { ModifyTransitRouterMulticastDomainResponse } from "./ModifyTransitRouterMulticastDomain/res";
import { DeleteTransitRouterMulticastDomainRequest } from "./DeleteTransitRouterMulticastDomain/req";
import { DeleteTransitRouterMulticastDomainResponse } from "./DeleteTransitRouterMulticastDomain/res";
import { ListTransitRouterMulticastDomainsRequest } from "./ListTransitRouterMulticastDomains/req";
import { ListTransitRouterMulticastDomainsResponse } from "./ListTransitRouterMulticastDomains/res";
import { AssociateTransitRouterMulticastDomainRequest } from "./AssociateTransitRouterMulticastDomain/req";
import { AssociateTransitRouterMulticastDomainResponse } from "./AssociateTransitRouterMulticastDomain/res";
import { DisassociateTransitRouterMulticastDomainRequest } from "./DisassociateTransitRouterMulticastDomain/req";
import { DisassociateTransitRouterMulticastDomainResponse } from "./DisassociateTransitRouterMulticastDomain/res";
import { ListTransitRouterMulticastDomainAssociationsRequest } from "./ListTransitRouterMulticastDomainAssociations/req";
import { ListTransitRouterMulticastDomainAssociationsResponse } from "./ListTransitRouterMulticastDomainAssociations/res";
import { ListTransitRouterMulticastDomainVSwitchesRequest } from "./ListTransitRouterMulticastDomainVSwitches/req";
import { ListTransitRouterMulticastDomainVSwitchesResponse } from "./ListTransitRouterMulticastDomainVSwitches/res";
import { RegisterTransitRouterMulticastGroupSourcesRequest } from "./RegisterTransitRouterMulticastGroupSources/req";
import { RegisterTransitRouterMulticastGroupSourcesResponse } from "./RegisterTransitRouterMulticastGroupSources/res";
import { DeregisterTransitRouterMulticastGroupSourcesRequest } from "./DeregisterTransitRouterMulticastGroupSources/req";
import { DeregisterTransitRouterMulticastGroupSourcesResponse } from "./DeregisterTransitRouterMulticastGroupSources/res";
import { RegisterTransitRouterMulticastGroupMembersRequest } from "./RegisterTransitRouterMulticastGroupMembers/req";
import { RegisterTransitRouterMulticastGroupMembersResponse } from "./RegisterTransitRouterMulticastGroupMembers/res";
import { DeregisterTransitRouterMulticastGroupMembersRequest } from "./DeregisterTransitRouterMulticastGroupMembers/req";
import { DeregisterTransitRouterMulticastGroupMembersResponse } from "./DeregisterTransitRouterMulticastGroupMembers/res";
import { ListGrantVSwitchEnisRequest } from "./ListGrantVSwitchEnis/req";
import { ListGrantVSwitchEnisResponse } from "./ListGrantVSwitchEnis/res";
import { ListTransitRouterMulticastGroupsRequest } from "./ListTransitRouterMulticastGroups/req";
import { ListTransitRouterMulticastGroupsResponse } from "./ListTransitRouterMulticastGroups/res";
import { EnableCenVbrHealthCheckRequest } from "./EnableCenVbrHealthCheck/req";
import { EnableCenVbrHealthCheckResponse } from "./EnableCenVbrHealthCheck/res";
import { DescribeCenVbrHealthCheckRequest } from "./DescribeCenVbrHealthCheck/req";
import { DescribeCenVbrHealthCheckResponse } from "./DescribeCenVbrHealthCheck/res";
import { DisableCenVbrHealthCheckRequest } from "./DisableCenVbrHealthCheck/req";
import { DisableCenVbrHealthCheckResponse } from "./DisableCenVbrHealthCheck/res";
import { CreateFlowlogRequest } from "./CreateFlowlog/req";
import { CreateFlowlogResponse } from "./CreateFlowlog/res";
import { ModifyFlowLogAttributeRequest } from "./ModifyFlowLogAttribute/req";
import { ModifyFlowLogAttributeResponse } from "./ModifyFlowLogAttribute/res";
import { ActiveFlowLogRequest } from "./ActiveFlowLog/req";
import { ActiveFlowLogResponse } from "./ActiveFlowLog/res";
import { DeactiveFlowLogRequest } from "./DeactiveFlowLog/req";
import { DeactiveFlowLogResponse } from "./DeactiveFlowLog/res";
import { DeleteFlowlogRequest } from "./DeleteFlowlog/req";
import { DeleteFlowlogResponse } from "./DeleteFlowlog/res";
import { DescribeFlowlogsRequest } from "./DescribeFlowlogs/req";
import { DescribeFlowlogsResponse } from "./DescribeFlowlogs/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DeleteTransitRouteTableAggregationRequest } from "./DeleteTransitRouteTableAggregation/req";
import { DeleteTransitRouteTableAggregationResponse } from "./DeleteTransitRouteTableAggregation/res";
import { DescribeTransitRouteTableAggregationDetailRequest } from "./DescribeTransitRouteTableAggregationDetail/req";
import { DescribeTransitRouteTableAggregationDetailResponse } from "./DescribeTransitRouteTableAggregationDetail/res";
import { CreateTransitRouteTableAggregationRequest } from "./CreateTransitRouteTableAggregation/req";
import { CreateTransitRouteTableAggregationResponse } from "./CreateTransitRouteTableAggregation/res";
import { RefreshTransitRouteTableAggregationRequest } from "./RefreshTransitRouteTableAggregation/req";
import { RefreshTransitRouteTableAggregationResponse } from "./RefreshTransitRouteTableAggregation/res";
import { DescribeTransitRouteTableAggregationRequest } from "./DescribeTransitRouteTableAggregation/req";
import { DescribeTransitRouteTableAggregationResponse } from "./DescribeTransitRouteTableAggregation/res";
import { ListCenChildInstanceRouteEntriesToAttachmentRequest } from "./ListCenChildInstanceRouteEntriesToAttachment/req";
import { ListCenChildInstanceRouteEntriesToAttachmentResponse } from "./ListCenChildInstanceRouteEntriesToAttachment/res";
import { ListCenInterRegionTrafficQosQueuesRequest } from "./ListCenInterRegionTrafficQosQueues/req";
import { ListCenInterRegionTrafficQosQueuesResponse } from "./ListCenInterRegionTrafficQosQueues/res";
import { UpdateTransitRouterEcrAttachmentAttributeRequest } from "./UpdateTransitRouterEcrAttachmentAttribute/req";
import { UpdateTransitRouterEcrAttachmentAttributeResponse } from "./UpdateTransitRouterEcrAttachmentAttribute/res";
import { DeleteTransitRouterEcrAttachmentRequest } from "./DeleteTransitRouterEcrAttachment/req";
import { DeleteTransitRouterEcrAttachmentResponse } from "./DeleteTransitRouterEcrAttachment/res";
import { CreateTransitRouterEcrAttachmentRequest } from "./CreateTransitRouterEcrAttachment/req";
import { CreateTransitRouterEcrAttachmentResponse } from "./CreateTransitRouterEcrAttachment/res";
import { ListTransitRouterEcrAttachmentsRequest } from "./ListTransitRouterEcrAttachments/req";
import { ListTransitRouterEcrAttachmentsResponse } from "./ListTransitRouterEcrAttachments/res";

interface CBN {
    /**
     * 云企业网实例是管理一体化网络的基础资源。一个云企业网实例管理一张网络，可覆盖一个或多个地域。在实现网络实例互通前，您需要先调用CreateCen接口创建一个云企业网实例。
     */
    CreateCen(query: CreateCenRequest): Promise<CreateCenResponse>;
    /**
     * 调用ModifyCenAttribute接口修改云企业网实例的名称和描述信息。
     */
    ModifyCenAttribute(query: ModifyCenAttributeRequest): Promise<ModifyCenAttributeResponse>;
    /**
     * 调用DescribeCens接口查询当前阿里云账号下的云企业网实例的状态、是否已开启IPv6功能、实例绑定的带宽包的列表等信息。
     */
    DescribeCens(query: DescribeCensRequest): Promise<DescribeCensResponse>;
    /**
     * 调用DeleteCen接口删除云企业网实例。
     */
    DeleteCen(query: DeleteCenRequest): Promise<DeleteCenResponse>;
    /**
     * 调用MoveResourceGroup接口修改云企业网实例或带宽包实例所属的资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 调用DescribeGrantRulesToResource接口查询网络实例对跨账号云企业网实例的授权信息，包括云企业网实例所属阿里云账号（主账号）、网络实例的付费方等信息。
     */
    DescribeGrantRulesToResource(query: DescribeGrantRulesToResourceRequest): Promise<DescribeGrantRulesToResourceResponse>;
    /**
     * 开通转发路由器服务。
     */
    OpenTransitRouterService(query: OpenTransitRouterServiceRequest): Promise<OpenTransitRouterServiceResponse>;
    /**
     * 查询当前阿里云账号是否已开通转发路由器服务。
     */
    CheckTransitRouterService(query: CheckTransitRouterServiceRequest): Promise<CheckTransitRouterServiceResponse>;
    /**
     * 调用CreateTransitRouter接口创建企业版转发路由器实例。
     */
    CreateTransitRouter(query: CreateTransitRouterRequest): Promise<CreateTransitRouterResponse>;
    /**
     * 调用DeleteTransitRouter接口删除企业版转发路由器实例。
     */
    DeleteTransitRouter(query: DeleteTransitRouterRequest): Promise<DeleteTransitRouterResponse>;
    /**
     * 调用UpdateTransitRouter接口修改转发路由器实例的名称和描述信息。
     */
    UpdateTransitRouter(query: UpdateTransitRouterRequest): Promise<UpdateTransitRouterResponse>;
    /**
     * 调用ListTransitRouters接口查询云企业网实例下转发路由器实例的实例类型、实例的状态、转发路由器实例ID、是否开启了组播功能等信息。
     */
    ListTransitRouters(query: ListTransitRoutersRequest): Promise<ListTransitRoutersResponse>;
    /**
     * 调用ListTransitRouterAvailableResource接口查询指定地域下企业版转发路由器支持的可用区信息。
     */
    ListTransitRouterAvailableResource(query: ListTransitRouterAvailableResourceRequest): Promise<ListTransitRouterAvailableResourceResponse>;
    /**
     * 在转发路由器实例连接其他账号的网络实例前，需要其他账号的网络实例对转发路由器实例进行授权。调用GrantInstanceToTransitRouter接口为转发路由器实例进行授权。
     */
    GrantInstanceToTransitRouter(query: GrantInstanceToTransitRouterRequest): Promise<GrantInstanceToTransitRouterResponse>;
    /**
     * 调用RevokeInstanceFromTransitRouter接口取消转发路由器实例连接跨账号网络实例的权限。
     */
    RevokeInstanceFromTransitRouter(query: RevokeInstanceFromTransitRouterRequest): Promise<RevokeInstanceFromTransitRouterResponse>;
    /**
     * 转发路由器地址段是您为转发路由器自定义的一个地址段，该地址段类似于为路由器环回口（Loopback接口）分配IP地址的地址段。您可以调用CreateTransitRouterCidr接口创建转发路由器下CIDR地址段。
     */
    CreateTransitRouterCidr(query: CreateTransitRouterCidrRequest): Promise<CreateTransitRouterCidrResponse>;
    /**
     * 调用ModifyTransitRouterCidr接口修改转发路由器下的CIDR地址段。
     */
    ModifyTransitRouterCidr(query: ModifyTransitRouterCidrRequest): Promise<ModifyTransitRouterCidrResponse>;
    /**
     * 删除转发路由器下CIDR地址段。
     */
    DeleteTransitRouterCidr(query: DeleteTransitRouterCidrRequest): Promise<DeleteTransitRouterCidrResponse>;
    /**
     * 调用ListTransitRouterCidr接口查询转发路由器下CIDR地址段的信息。
     */
    ListTransitRouterCidr(query: ListTransitRouterCidrRequest): Promise<ListTransitRouterCidrResponse>;
    /**
     * 调用ListTransitRouterCidrAllocation接口查询CIDR地址段的分配信息。
     */
    ListTransitRouterCidrAllocation(query: ListTransitRouterCidrAllocationRequest): Promise<ListTransitRouterCidrAllocationResponse>;
    /**
     * 调用CreateTransitRouterVpcAttachment接口将要互通的专有网络VPC（Virtual Private Cloud）实例连接至转发路由器实例。连接后，转发路由器实例可以帮助您实现私网互通。
     */
    CreateTransitRouterVpcAttachment(query: CreateTransitRouterVpcAttachmentRequest): Promise<CreateTransitRouterVpcAttachmentResponse>;
    /**
     * 调用DeleteTransitRouterVpcAttachment接口删除企业版转发路由器下的专有网络VPC（Virtual Private Cloud）连接。
     */
    DeleteTransitRouterVpcAttachment(query: DeleteTransitRouterVpcAttachmentRequest): Promise<DeleteTransitRouterVpcAttachmentResponse>;
    /**
     * 调用UpdateTransitRouterVpcAttachmentAttribute接口修改企业版转发路由器下VPC连接的名称和描述信息以及是否需要使企业版转发路由器自动发布路由到 VPC 实例。
     */
    UpdateTransitRouterVpcAttachmentAttribute(query: UpdateTransitRouterVpcAttachmentAttributeRequest): Promise<UpdateTransitRouterVpcAttachmentAttributeResponse>;
    /**
     * 调用UpdateTransitRouterVpcAttachmentZones接口修改专有网络VPC（Virtual Private Cloud）连接关联的可用区和交换机。
     */
    UpdateTransitRouterVpcAttachmentZones(query: UpdateTransitRouterVpcAttachmentZonesRequest): Promise<UpdateTransitRouterVpcAttachmentZonesResponse>;
    /**
     * 调用ListTransitRouterVpcAttachments接口查询企业版转发路由器下专有网络VPC（Virtual Private Cloud）VPC连接的状态、VPC连接的付费类型、VPC连接的可用区信息及其关联的VPC实例的交换机和弹性网卡信息等。
     */
    ListTransitRouterVpcAttachments(query: ListTransitRouterVpcAttachmentsRequest): Promise<ListTransitRouterVpcAttachmentsResponse>;
    /**
     * 您可以调用CreateTransitRouterVbrAttachment接口将要互通的边界路由器VBR（Virtual Border Router）网络实例连接到同地域的转发路由器实例中。连接后，转发路由器可帮您实现私网互通。
     */
    CreateTransitRouterVbrAttachment(query: CreateTransitRouterVbrAttachmentRequest): Promise<CreateTransitRouterVbrAttachmentResponse>;
    /**
     * 调用DeleteTransitRouterVbrAttachment接口删除企业版转发路由器下的边界路由器VBR（Virtual border router）连接。
     */
    DeleteTransitRouterVbrAttachment(query: DeleteTransitRouterVbrAttachmentRequest): Promise<DeleteTransitRouterVbrAttachmentResponse>;
    /**
     * 调用UpdateTransitRouterVbrAttachmentAttribute接口修改企业版转发路由器下VBR连接的名称、描述信息、是否允许自动发布路由。
     */
    UpdateTransitRouterVbrAttachmentAttribute(query: UpdateTransitRouterVbrAttachmentAttributeRequest): Promise<UpdateTransitRouterVbrAttachmentAttributeResponse>;
    /**
     * 调用ListTransitRouterVbrAttachments接口查询企业版转发路由器下的边界路由器VBR总条目数、连接的状态、连接 ID、网络实例的付费方等连接信息。
     */
    ListTransitRouterVbrAttachments(query: ListTransitRouterVbrAttachmentsRequest): Promise<ListTransitRouterVbrAttachmentsResponse>;
    /**
     * 转发路由器支持连接VPN网关的IPsec连接。本地数据中心可以通过IPsec连接直接连接至转发路由器，然后通过转发路由器实现与其他网络的互通，调用CreateTransitRouterVpnAttachment接口创建VPN连接。
     */
    CreateTransitRouterVpnAttachment(query: CreateTransitRouterVpnAttachmentRequest): Promise<CreateTransitRouterVpnAttachmentResponse>;
    /**
     * 调用DeleteTransitRouterVpnAttachment接口删除VPN连接。
     */
    DeleteTransitRouterVpnAttachment(query: DeleteTransitRouterVpnAttachmentRequest): Promise<DeleteTransitRouterVpnAttachmentResponse>;
    /**
     * 调用UpdateTransitRouterVpnAttachmentAttribute接口修改企业版转发路由器下VPN连接的名称、描述信息、是否允许自动发布路由。
     */
    UpdateTransitRouterVpnAttachmentAttribute(query: UpdateTransitRouterVpnAttachmentAttributeRequest): Promise<UpdateTransitRouterVpnAttachmentAttributeResponse>;
    /**
     * 调用ListTransitRouterVpnAttachment接口查询VPN连接的状态、IPsec连接ID、VPN连接的付费类型等信息。
     */
    ListTransitRouterVpnAttachments(query: ListTransitRouterVpnAttachmentsRequest): Promise<ListTransitRouterVpnAttachmentsResponse>;
    /**
     * 调用AttachCenChildInstance接口将网络实例加载到云企业网实例中。
     */
    AttachCenChildInstance(query: AttachCenChildInstanceRequest): Promise<AttachCenChildInstanceResponse>;
    /**
     * 调用DetachCenChildInstance接口卸载云企业网实例中的网络实例。
     */
    DetachCenChildInstance(query: DetachCenChildInstanceRequest): Promise<DetachCenChildInstanceResponse>;
    /**
     * 调用DescribeCenAttachedChildInstanceAttribute接口查看加载到CEN中的网络实例（VPC、VBR、CCN）的网络实例的加载状态、网络实例的类型等详细信息。
     */
    DescribeCenAttachedChildInstanceAttribute(query: DescribeCenAttachedChildInstanceAttributeRequest): Promise<DescribeCenAttachedChildInstanceAttributeResponse>;
    /**
     * 调用DescribeCenAttachedChildInstances接口查询云企业网实例下已加载的网络实例信息。
     */
    DescribeCenAttachedChildInstances(query: DescribeCenAttachedChildInstancesRequest): Promise<DescribeCenAttachedChildInstancesResponse>;
    /**
     * 调用DescribeChildInstanceRegions接口查询云企业网支持加载网络实例的地域信息。
     */
    DescribeChildInstanceRegions(query: DescribeChildInstanceRegionsRequest): Promise<DescribeChildInstanceRegionsResponse>;
    /**
     * 调用DescribeGrantRulesToCen接口查询云企业网实例已获得授权的跨账号的网络实例的信息。
     */
    DescribeGrantRulesToCen(query: DescribeGrantRulesToCenRequest): Promise<DescribeGrantRulesToCenResponse>;
    /**
     * 调用ListGrantVSwitchesToCen接口查询云企业网实例已连接的跨账号专有网络VPC（Virtual Private Cloud）下交换机的信息。
     */
    ListGrantVSwitchesToCen(query: ListGrantVSwitchesToCenRequest): Promise<ListGrantVSwitchesToCenResponse>;
    /**
     * 要实现跨地域网络实例互通，您必须购买带宽包，您可以调用CreateCenBandwidthPackage接口创建带宽包。
     */
    CreateCenBandwidthPackage(query: CreateCenBandwidthPackageRequest): Promise<CreateCenBandwidthPackageResponse>;
    /**
     * 调用ModifyCenBandwidthPackageAttribute接口修改带宽包实例的名称和描述信息。
     */
    ModifyCenBandwidthPackageAttribute(query: ModifyCenBandwidthPackageAttributeRequest): Promise<ModifyCenBandwidthPackageAttributeResponse>;
    /**
     * 调用ModifyCenBandwidthPackageSpec接口修改带宽包实例的带宽峰值。
     */
    ModifyCenBandwidthPackageSpec(query: ModifyCenBandwidthPackageSpecRequest): Promise<ModifyCenBandwidthPackageSpecResponse>;
    /**
     * 查询指定带宽包实例的剩余带宽值。
     */
    DescribeCenGeographicSpanRemainingBandwidth(query: DescribeCenGeographicSpanRemainingBandwidthRequest): Promise<DescribeCenGeographicSpanRemainingBandwidthResponse>;
    /**
     * 调用DescribeCenBandwidthPackages接口查询带宽包实例的信息。
     */
    DescribeCenBandwidthPackages(query: DescribeCenBandwidthPackagesRequest): Promise<DescribeCenBandwidthPackagesResponse>;
    /**
     * 调用DescribeCenGeographicSpans接口查询云企业网支持的互通区域的信息。
     */
    DescribeCenGeographicSpans(query: DescribeCenGeographicSpansRequest): Promise<DescribeCenGeographicSpansResponse>;
    /**
     * 查询指定区域内的地域信息。
     */
    DescribeGeographicRegionMembership(query: DescribeGeographicRegionMembershipRequest): Promise<DescribeGeographicRegionMembershipResponse>;
    /**
     * 调用UnassociateCenBandwidthPackage接口解绑带宽包与云企业网实例之间的绑定，解绑后该带宽包可以绑定至其他云企业网实例。
     */
    UnassociateCenBandwidthPackage(query: UnassociateCenBandwidthPackageRequest): Promise<UnassociateCenBandwidthPackageResponse>;
    /**
     * 将带宽包实例绑定至云企业网实例。
     */
    AssociateCenBandwidthPackage(query: AssociateCenBandwidthPackageRequest): Promise<AssociateCenBandwidthPackageResponse>;
    /**
     * 调用DeleteCenBandwidthPackage接口删除带宽包实例。
     */
    DeleteCenBandwidthPackage(query: DeleteCenBandwidthPackageRequest): Promise<DeleteCenBandwidthPackageResponse>;
    /**
     * 调用TempUpgradeCenBandwidthPackageSpec接口对云企业网预付费带宽包实例临时升配。
     */
    TempUpgradeCenBandwidthPackageSpec(query: TempUpgradeCenBandwidthPackageSpecRequest): Promise<TempUpgradeCenBandwidthPackageSpecResponse>;
    /**
     * 网络实例（VPC、VBR、IPsec连接）被连接至转发路由器后，如果要实现不同地域网络实例的互通，需要在网络实例连接的转发路由器下创建跨地域连接，您可以调用CreateTransitRouterPeerAttachment接口为企业版转发路由器实例创建跨地域连接。
     */
    CreateTransitRouterPeerAttachment(query: CreateTransitRouterPeerAttachmentRequest): Promise<CreateTransitRouterPeerAttachmentResponse>;
    /**
     * 调用DeleteTransitRouterPeerAttachment接口删除企业版转发路由器下的跨地域连接。
     */
    DeleteTransitRouterPeerAttachment(query: DeleteTransitRouterPeerAttachmentRequest): Promise<DeleteTransitRouterPeerAttachmentResponse>;
    /**
     * 调用UpdateTransitRouterPeerAttachmentAttribute接口修改企业版转发路由器下跨地域连接的配置。
     */
    UpdateTransitRouterPeerAttachmentAttribute(query: UpdateTransitRouterPeerAttachmentAttributeRequest): Promise<UpdateTransitRouterPeerAttachmentAttributeResponse>;
    /**
     * 调用ListTransitRouterPeerAttachments接口查询企业版转发路由器下的跨地域连接的详细信息。
     */
    ListTransitRouterPeerAttachments(query: ListTransitRouterPeerAttachmentsRequest): Promise<ListTransitRouterPeerAttachmentsResponse>;
    /**
     * 调用SetCenInterRegionBandwidthLimit接口设置、修改或删除基础版转发路由器带宽包中两个地域间的跨地域互通带宽。
     */
    SetCenInterRegionBandwidthLimit(query: SetCenInterRegionBandwidthLimitRequest): Promise<SetCenInterRegionBandwidthLimitResponse>;
    /**
     * 调用DescribeCenInterRegionBandwidthLimits接口查询各个地域之间的跨地域互通带宽的信息。
     */
    DescribeCenInterRegionBandwidthLimits(query: DescribeCenInterRegionBandwidthLimitsRequest): Promise<DescribeCenInterRegionBandwidthLimitsResponse>;
    /**
     * 调用DescribeCenRegionDomainRouteEntries接口查询云企业网实例中具体地域内路由条目的详细信息。
     */
    DescribeCenRegionDomainRouteEntries(query: DescribeCenRegionDomainRouteEntriesRequest): Promise<DescribeCenRegionDomainRouteEntriesResponse>;
    /**
     * 调用DescribeCenChildInstanceRouteEntries接口查询云企业网中网络实例的路由条目信息。
     */
    DescribeCenChildInstanceRouteEntries(query: DescribeCenChildInstanceRouteEntriesRequest): Promise<DescribeCenChildInstanceRouteEntriesResponse>;
    /**
     * 您可以调用DescribePublishedRouteEntries接口查询已加载到CEN网络实例（VPC和VBR）的各条路由在CEN中的发布状态、路由条目下一跳关联的实例类型、是否允许发布或撤销该路由到云企业网等信息。
     */
    DescribePublishedRouteEntries(query: DescribePublishedRouteEntriesRequest): Promise<DescribePublishedRouteEntriesResponse>;
    /**
     * 调用DescribeRouteConflict接口查询网络实例中存在冲突的路由条目信息。
     */
    DescribeRouteConflict(query: DescribeRouteConflictRequest): Promise<DescribeRouteConflictResponse>;
    /**
     * 云企业网支持发布路由的功能。您可以将加载到云企业网中的VPC或VBR中的路由通过调用PublishRouteEntries接口发布到云企业网中，在没有路由冲突的情况下，云企业网中的其他网络实例可以学习到该路由。
     */
    PublishRouteEntries(query: PublishRouteEntriesRequest): Promise<PublishRouteEntriesResponse>;
    /**
     * 调用WithdrawPublishedRouteEntries接口撤回专有网络VPC（Virtual Private Cloud）或边界路由器VBR（Virtual border router）实例已发布至云企业网的路由条目。
     */
    WithdrawPublishedRouteEntries(query: WithdrawPublishedRouteEntriesRequest): Promise<WithdrawPublishedRouteEntriesResponse>;
    /**
     * 在企业版转发路由器中，您可以调用CreateCenChildInstanceRouteEntryToAttachment接口为网络实例添加路由条目，目标网段的下一跳指向当前地域的转发路由器。
     */
    CreateCenChildInstanceRouteEntryToAttachment(query: CreateCenChildInstanceRouteEntryToAttachmentRequest): Promise<CreateCenChildInstanceRouteEntryToAttachmentResponse>;
    /**
     * 调用DeleteCenChildInstanceRouteEntryToAttachment接口删除企业版转发路由器连接的网络实例的路由条目。
     */
    DeleteCenChildInstanceRouteEntryToAttachment(query: DeleteCenChildInstanceRouteEntryToAttachmentRequest): Promise<DeleteCenChildInstanceRouteEntryToAttachmentResponse>;
    /**
     * 调用CreateCenChildInstanceRouteEntryToCen接口为网络实例添加路由条目。
     */
    CreateCenChildInstanceRouteEntryToCen(query: CreateCenChildInstanceRouteEntryToCenRequest): Promise<CreateCenChildInstanceRouteEntryToCenResponse>;
    /**
     * 调用DeleteCenChildInstanceRouteEntryToCen接口删除网络实例下的路由条目。
     */
    DeleteCenChildInstanceRouteEntryToCen(query: DeleteCenChildInstanceRouteEntryToCenRequest): Promise<DeleteCenChildInstanceRouteEntryToCenResponse>;
    /**
     * 调用CreateTransitRouterRouteTable接口为企业版转发路由器创建自定义路由表。
     */
    CreateTransitRouterRouteTable(query: CreateTransitRouterRouteTableRequest): Promise<CreateTransitRouterRouteTableResponse>;
    /**
     * 调用DeleteTransitRouterRouteTable接口删除企业版转发路由器的自定义路由表。
     */
    DeleteTransitRouterRouteTable(query: DeleteTransitRouterRouteTableRequest): Promise<DeleteTransitRouterRouteTableResponse>;
    /**
     * 调用UpdateTransitRouterRouteTable接口修改企业版转发路由器路由表的名称、描述信息和开启或关闭多地域等价路由。
     */
    UpdateTransitRouterRouteTable(query: UpdateTransitRouterRouteTableRequest): Promise<UpdateTransitRouterRouteTableResponse>;
    /**
     * 调用ListTransitRouterRouteTables接口查询企业版转发路由器的路由表的详细信息。
     */
    ListTransitRouterRouteTables(query: ListTransitRouterRouteTablesRequest): Promise<ListTransitRouterRouteTablesResponse>;
    /**
     * 在企业版转发路由器的路由表中添加路由条目。
     */
    CreateTransitRouterRouteEntry(query: CreateTransitRouterRouteEntryRequest): Promise<CreateTransitRouterRouteEntryResponse>;
    /**
     * 修改企业版转发路由器路由表中路由条目的名称和描述信息。
     */
    UpdateTransitRouterRouteEntry(query: UpdateTransitRouterRouteEntryRequest): Promise<UpdateTransitRouterRouteEntryResponse>;
    /**
     * 调用DeleteTransitRouterRouteEntry接口删除企业版转发路由器路由表中黑洞、连接实例类型的静态配置路由条目。
     */
    DeleteTransitRouterRouteEntry(query: DeleteTransitRouterRouteEntryRequest): Promise<DeleteTransitRouterRouteEntryResponse>;
    /**
     * 调用ListTransitRouterRouteEntries接口查询企业版转发路由器路由表中的路由条目的详细信息。
     */
    ListTransitRouterRouteEntries(query: ListTransitRouterRouteEntriesRequest): Promise<ListTransitRouterRouteEntriesResponse>;
    /**
     * 创建关联转发关系。
     */
    AssociateTransitRouterAttachmentWithRouteTable(query: AssociateTransitRouterAttachmentWithRouteTableRequest): Promise<AssociateTransitRouterAttachmentWithRouteTableResponse>;
    /**
     * 更换网络实例连接关联的转发路由器路由表。
     */
    ReplaceTransitRouterRouteTableAssociation(query: ReplaceTransitRouterRouteTableAssociationRequest): Promise<ReplaceTransitRouterRouteTableAssociationResponse>;
    /**
     * 调用ListTransitRouterRouteTableAssociations接口查询企业版转发路由器路由表或网络实例连接已创建的关联转发关系。
     */
    ListTransitRouterRouteTableAssociations(query: ListTransitRouterRouteTableAssociationsRequest): Promise<ListTransitRouterRouteTableAssociationsResponse>;
    /**
     * 解除关联转发关系。
     */
    DissociateTransitRouterAttachmentFromRouteTable(query: DissociateTransitRouterAttachmentFromRouteTableRequest): Promise<DissociateTransitRouterAttachmentFromRouteTableResponse>;
    /**
     * 创建路由学习关系。
     */
    EnableTransitRouterRouteTablePropagation(query: EnableTransitRouterRouteTablePropagationRequest): Promise<EnableTransitRouterRouteTablePropagationResponse>;
    /**
     * 查询企业版转发路由器路由表的路由学习关系。
     */
    ListTransitRouterRouteTablePropagations(query: ListTransitRouterRouteTablePropagationsRequest): Promise<ListTransitRouterRouteTablePropagationsResponse>;
    /**
     * 解除路由学习关系。
     */
    DisableTransitRouterRouteTablePropagation(query: DisableTransitRouterRouteTablePropagationRequest): Promise<DisableTransitRouterRouteTablePropagationResponse>;
    /**
     * 通过路由策略功能，可以过滤路由信息，帮助您自定义管理云上网络互通能力，您可以调用CreateCenRouteMap接口创建路由策略。
     */
    CreateCenRouteMap(query: CreateCenRouteMapRequest): Promise<CreateCenRouteMapResponse>;
    /**
     * 调用DescribeCenRouteMaps接口查询路由策略中已配置信息。
     */
    DescribeCenRouteMaps(query: DescribeCenRouteMapsRequest): Promise<DescribeCenRouteMapsResponse>;
    /**
     * 调用ModifyCenRouteMap接口修改路由策略。
     */
    ModifyCenRouteMap(query: ModifyCenRouteMapRequest): Promise<ModifyCenRouteMapResponse>;
    /**
     * 调用DeleteCenRouteMap接口删除指定的路由策略。
     */
    DeleteCenRouteMap(query: DeleteCenRouteMapRequest): Promise<DeleteCenRouteMapResponse>;
    /**
     * 为企业版转发路由器路由表绑定前缀列表。
     */
    CreateTransitRouterPrefixListAssociation(query: CreateTransitRouterPrefixListAssociationRequest): Promise<CreateTransitRouterPrefixListAssociationResponse>;
    /**
     * 解除企业版转发路由器路由表与前缀列表的绑定关系。
     */
    DeleteTransitRouterPrefixListAssociation(query: DeleteTransitRouterPrefixListAssociationRequest): Promise<DeleteTransitRouterPrefixListAssociationResponse>;
    /**
     * 查询企业版转发路由器路由表绑定的前缀列表的信息。
     */
    ListTransitRouterPrefixListAssociation(query: ListTransitRouterPrefixListAssociationRequest): Promise<ListTransitRouterPrefixListAssociationResponse>;
    /**
     * 流量标记策略通过流分类规则捕获符合规则的流量，捕获后，您可以为流量添加DSCP（Differentiated Services Code Point）值作为标记。您可以通过调用CreateTrafficMarkingPolicy创建流量标记策略。
     */
    CreateTrafficMarkingPolicy(query: CreateTrafficMarkingPolicyRequest): Promise<CreateTrafficMarkingPolicyResponse>;
    /**
     * 调用UpdateTrafficMarkingPolicyAttribute接口修改流量标记策略的名称，描述信息以及流分类规则。
     */
    UpdateTrafficMarkingPolicyAttribute(query: UpdateTrafficMarkingPolicyAttributeRequest): Promise<UpdateTrafficMarkingPolicyAttributeResponse>;
    /**
     * 调用AddTrafficMatchRuleToTrafficMarkingPolicy接口为流量标记策略添加流分类规则。
     */
    AddTrafficMatchRuleToTrafficMarkingPolicy(query: AddTrafficMatchRuleToTrafficMarkingPolicyRequest): Promise<AddTrafficMatchRuleToTrafficMarkingPolicyResponse>;
    /**
     * 为流量标记策略添加流分类规则。
     */
    AddTraficMatchRuleToTrafficMarkingPolicy(query: AddTraficMatchRuleToTrafficMarkingPolicyRequest): Promise<AddTraficMatchRuleToTrafficMarkingPolicyResponse>;
    /**
     * 调用RemoveTrafficMatchRuleFromTrafficMarkingPolicy接口删除流量标记策略下的流分类规则。
     */
    RemoveTrafficMatchRuleFromTrafficMarkingPolicy(query: RemoveTrafficMatchRuleFromTrafficMarkingPolicyRequest): Promise<RemoveTrafficMatchRuleFromTrafficMarkingPolicyResponse>;
    /**
     * 删除流量标记策略下的流分类规则。
     */
    RemoveTraficMatchRuleFromTrafficMarkingPolicy(query: RemoveTraficMatchRuleFromTrafficMarkingPolicyRequest): Promise<RemoveTraficMatchRuleFromTrafficMarkingPolicyResponse>;
    /**
     * 调用DeleteTrafficMarkingPolicy接口删除流量标记策略。
     */
    DeleteTrafficMarkingPolicy(query: DeleteTrafficMarkingPolicyRequest): Promise<DeleteTrafficMarkingPolicyResponse>;
    /**
     * 调用ListTrafficMarkingPolicies接口查询流量标记策略的状态、流量标记策略的优先级等详细信息。
     */
    ListTrafficMarkingPolicies(query: ListTrafficMarkingPoliciesRequest): Promise<ListTrafficMarkingPoliciesResponse>;
    /**
     * 如果您需要优化和控制跨区域的网络流量，您可以调用CreateCenInterRegionTrafficQosPolicy接口创建企业版转发路由器下的跨地域流量调度策略。
     */
    CreateCenInterRegionTrafficQosPolicy(query: CreateCenInterRegionTrafficQosPolicyRequest): Promise<CreateCenInterRegionTrafficQosPolicyResponse>;
    /**
     * 如果您需要对不同类型和优先级的网络流量进行细致管理，以确保关键业务流量的性能并遵守服务级别协议，您可以调用CreateCenInterRegionTrafficQosQueue接口创建流量调度策略下队列的配置。
     */
    CreateCenInterRegionTrafficQosQueue(query: CreateCenInterRegionTrafficQosQueueRequest): Promise<CreateCenInterRegionTrafficQosQueueResponse>;
    /**
     * 调用UpdateCenInterRegionTrafficQosPolicyAttribute接口修改流量调度策略的名称和描述信息。
     */
    UpdateCenInterRegionTrafficQosPolicyAttribute(query: UpdateCenInterRegionTrafficQosPolicyAttributeRequest): Promise<UpdateCenInterRegionTrafficQosPolicyAttributeResponse>;
    /**
     * 调用UpdateCenInterRegionTrafficQosQueueAttribute接口修改流量调度策略下队列的名称、描述、跨地域带宽、DSCP值的配置。
     */
    UpdateCenInterRegionTrafficQosQueueAttribute(query: UpdateCenInterRegionTrafficQosQueueAttributeRequest): Promise<UpdateCenInterRegionTrafficQosQueueAttributeResponse>;
    /**
     * 调用DeleteCenInterRegionTrafficQosQueue接口删除流量调度策略下的队列。
     */
    DeleteCenInterRegionTrafficQosQueue(query: DeleteCenInterRegionTrafficQosQueueRequest): Promise<DeleteCenInterRegionTrafficQosQueueResponse>;
    /**
     * 调用DeleteCenInterRegionTrafficQosPolicy接口删除流量调度策略。
     */
    DeleteCenInterRegionTrafficQosPolicy(query: DeleteCenInterRegionTrafficQosPolicyRequest): Promise<DeleteCenInterRegionTrafficQosPolicyResponse>;
    /**
     * 调用ListCenInterRegionTrafficQosPolicies接口查询流量调度策略的信息。
     */
    ListCenInterRegionTrafficQosPolicies(query: ListCenInterRegionTrafficQosPoliciesRequest): Promise<ListCenInterRegionTrafficQosPoliciesResponse>;
    /**
     * 您可以通过调用ResolveAndRouteServiceInCen接口设置云服务，为本地网络添加访问云服务的配置。
     */
    ResolveAndRouteServiceInCen(query: ResolveAndRouteServiceInCenRequest): Promise<ResolveAndRouteServiceInCenResponse>;
    /**
     * 调用DeleteRouteServiceInCen接口删除基础版转发路由器云服务配置。
     */
    DeleteRouteServiceInCen(query: DeleteRouteServiceInCenRequest): Promise<DeleteRouteServiceInCenResponse>;
    /**
     * 调用DescribeRouteServicesInCen接口查询基础版转发路由器下的云服务配置信息。
     */
    DescribeRouteServicesInCen(query: DescribeRouteServicesInCenRequest): Promise<DescribeRouteServicesInCenResponse>;
    /**
     * 调用RoutePrivateZoneInCenToVpc接口设置PrivateZone服务。
     */
    RoutePrivateZoneInCenToVpc(query: RoutePrivateZoneInCenToVpcRequest): Promise<RoutePrivateZoneInCenToVpcResponse>;
    /**
     * 调用DescribeCenPrivateZoneRoutes接口查询云企业网实例的PrivateZone服务配置信息。
     */
    DescribeCenPrivateZoneRoutes(query: DescribeCenPrivateZoneRoutesRequest): Promise<DescribeCenPrivateZoneRoutesResponse>;
    /**
     * 调用UnroutePrivateZoneInCenToVpc接口删除PrivateZone服务配置。
     */
    UnroutePrivateZoneInCenToVpc(query: UnroutePrivateZoneInCenToVpcRequest): Promise<UnroutePrivateZoneInCenToVpcResponse>;
    /**
     * 组播域是在地域范围内定义一个组播网络的范围，只有组播域之内的资源可以发送和接收组播流量，组播域之外的资源无法发送和接收组播流量，您可以调用CreateTransitRouterMulticastDomain接口创建组播域。
     */
    CreateTransitRouterMulticastDomain(query: CreateTransitRouterMulticastDomainRequest): Promise<CreateTransitRouterMulticastDomainResponse>;
    /**
     * 调用ModifyTransitRouterMulticastDomain接口修改组播域的名称和描述信息。
     */
    ModifyTransitRouterMulticastDomain(query: ModifyTransitRouterMulticastDomainRequest): Promise<ModifyTransitRouterMulticastDomainResponse>;
    /**
     * 调用DeleteTransitRouterMulticastDomain接口删除组播域。
     */
    DeleteTransitRouterMulticastDomain(query: DeleteTransitRouterMulticastDomainRequest): Promise<DeleteTransitRouterMulticastDomainResponse>;
    /**
     * 调用ListTransitRouterMulticastDomains接口查询组播域的状态、组播域ID、组播域的描述等信息。
     */
    ListTransitRouterMulticastDomains(query: ListTransitRouterMulticastDomainsRequest): Promise<ListTransitRouterMulticastDomainsResponse>;
    /**
     * 为了VPC下的资源可以实现组播通信，调用AssociateTransitRouterMulticastDomain接口将专有网络（VPC）下的交换机（VSwitch）关联到组播域中。
     */
    AssociateTransitRouterMulticastDomain(query: AssociateTransitRouterMulticastDomainRequest): Promise<AssociateTransitRouterMulticastDomainResponse>;
    /**
     * 调用DisassociateTransitRouterMulticastDomain接口解除交换机与组播域的关联关系。
     */
    DisassociateTransitRouterMulticastDomain(query: DisassociateTransitRouterMulticastDomainRequest): Promise<DisassociateTransitRouterMulticastDomainResponse>;
    /**
     * 您可以调用ListTransitRouterMulticastDomainAssociations接口查询组播域和交换机的关联关系。
     */
    ListTransitRouterMulticastDomainAssociations(query: ListTransitRouterMulticastDomainAssociationsRequest): Promise<ListTransitRouterMulticastDomainAssociationsResponse>;
    /**
     * VPC实例连接至企业版转发路由器后，您可以调用ListTransitRouterMulticastDomainVSwitches接口查询VPC实例下已绑定组播域的交换机的信息。
     */
    ListTransitRouterMulticastDomainVSwitches(query: ListTransitRouterMulticastDomainVSwitchesRequest): Promise<ListTransitRouterMulticastDomainVSwitchesResponse>;
    /**
     * 为了实现一对多的组播通信，调用RegisterTransitRouterMulticastGroupSources接口创建组播源。
     */
    RegisterTransitRouterMulticastGroupSources(query: RegisterTransitRouterMulticastGroupSourcesRequest): Promise<RegisterTransitRouterMulticastGroupSourcesResponse>;
    /**
     * 如果您不需要某个组播源再发送组播流量，您可以调用DeregisterTransitRouterMulticastGroupSources接口将该组播源从组播组中删除。
     */
    DeregisterTransitRouterMulticastGroupSources(query: DeregisterTransitRouterMulticastGroupSourcesRequest): Promise<DeregisterTransitRouterMulticastGroupSourcesResponse>;
    /**
     * 调用RegisterTransitRouterMulticastGroupMembers接口创建或添加组播成员。
     */
    RegisterTransitRouterMulticastGroupMembers(query: RegisterTransitRouterMulticastGroupMembersRequest): Promise<RegisterTransitRouterMulticastGroupMembersResponse>;
    /**
     * 如果您不需要某个组播成员再接收组播流量，您可以调用DeregisterTransitRouterMulticastGroupMembers接口将该组播成员从组播组中删除。
     */
    DeregisterTransitRouterMulticastGroupMembers(query: DeregisterTransitRouterMulticastGroupMembersRequest): Promise<DeregisterTransitRouterMulticastGroupMembersResponse>;
    /**
     * 调用ListGrantVSwitchEnis接口查询在一个专有网络内部，哪些弹性网卡的配置可以成为组播源或者组播成员用来进行组播通信。
     */
    ListGrantVSwitchEnis(query: ListGrantVSwitchEnisRequest): Promise<ListGrantVSwitchEnisResponse>;
    /**
     * 调用ListTransitRouterMulticastGroups接口查询组播域下组播成员和组播源的详细信息。
     */
    ListTransitRouterMulticastGroups(query: ListTransitRouterMulticastGroupsRequest): Promise<ListTransitRouterMulticastGroupsResponse>;
    /**
     * 开启边界路由器（VBR）的健康检查功能，确保及时发现出现故障的物理专线，也可修改VBR的健康检查配置。
     */
    EnableCenVbrHealthCheck(query: EnableCenVbrHealthCheckRequest): Promise<EnableCenVbrHealthCheckResponse>;
    /**
     * 查询指定地域内边界路由器（VBR）健康检查信息。
     */
    DescribeCenVbrHealthCheck(query: DescribeCenVbrHealthCheckRequest): Promise<DescribeCenVbrHealthCheckResponse>;
    /**
     * 关闭指定边界路由器（VBR）的健康检查。
     */
    DisableCenVbrHealthCheck(query: DisableCenVbrHealthCheckRequest): Promise<DisableCenVbrHealthCheckResponse>;
    /**
     * 创建流日志。
     */
    CreateFlowlog(query: CreateFlowlogRequest): Promise<CreateFlowlogResponse>;
    /**
     * 编辑流日志的名称和描述。
     */
    ModifyFlowLogAttribute(query: ModifyFlowLogAttributeRequest): Promise<ModifyFlowLogAttributeResponse>;
    /**
     * 启动流日志，启动后开始捕获指定资源的流量。
     */
    ActiveFlowLog(query: ActiveFlowLogRequest): Promise<ActiveFlowLogResponse>;
    /**
     * 停止流日志，停止后不再捕获指定资源的流量。
     */
    DeactiveFlowLog(query: DeactiveFlowLogRequest): Promise<DeactiveFlowLogResponse>;
    /**
     * 删除流日志。
     */
    DeleteFlowlog(query: DeleteFlowlogRequest): Promise<DeleteFlowlogResponse>;
    /**
     * 查询流日志。
     */
    DescribeFlowlogs(query: DescribeFlowlogsRequest): Promise<DescribeFlowlogsResponse>;
    /**
     * 为资源创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 查询云企业网实例绑定的标签信息。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为资源解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 删除聚合路由。
     */
    DeleteTransitRouteTableAggregation(query: DeleteTransitRouteTableAggregationRequest): Promise<DeleteTransitRouteTableAggregationResponse>;
    /**
     * 查询指定聚合路由的配置详情。
     */
    DescribeTransitRouteTableAggregationDetail(query: DescribeTransitRouteTableAggregationDetailRequest): Promise<DescribeTransitRouteTableAggregationDetailResponse>;
    /**
     * 创建聚合路由。
     */
    CreateTransitRouteTableAggregation(query: CreateTransitRouteTableAggregationRequest): Promise<CreateTransitRouteTableAggregationResponse>;
    /**
     * 重新发布聚合路由。
     */
    RefreshTransitRouteTableAggregation(query: RefreshTransitRouteTableAggregationRequest): Promise<RefreshTransitRouteTableAggregationResponse>;
    /**
     * 查询企业版转发路由器路由表下的聚合路由。
     */
    DescribeTransitRouteTableAggregation(query: DescribeTransitRouteTableAggregationRequest): Promise<DescribeTransitRouteTableAggregationResponse>;
    /**
     * 调用ListCenChildInstanceRouteEntriesToAttachment接口查询企业版转发路由器下网络实例路由表中指向网络实例连接的路由条目。
     */
    ListCenChildInstanceRouteEntriesToAttachment(query: ListCenChildInstanceRouteEntriesToAttachmentRequest): Promise<ListCenChildInstanceRouteEntriesToAttachmentResponse>;
    /**
     * 调用ListCenInterRegionTrafficQosQueues接口查询流量调度策略队列的信息。
     */
    ListCenInterRegionTrafficQosQueues(query: ListCenInterRegionTrafficQosQueuesRequest): Promise<ListCenInterRegionTrafficQosQueuesResponse>;
    /**
     * 调用UpdateTransitRouterEcrAttachmentAttribute接口修改企业版转发路由器下ECR连接的名称、描述信息。
     */
    UpdateTransitRouterEcrAttachmentAttribute(query: UpdateTransitRouterEcrAttachmentAttributeRequest): Promise<UpdateTransitRouterEcrAttachmentAttributeResponse>;
    /**
     * 调用DeleteTransitRouterEcrAttachment接口删除企业版转发路由器下的专线网关ECR（ExpressConnect Router）连接。
     */
    DeleteTransitRouterEcrAttachment(query: DeleteTransitRouterEcrAttachmentRequest): Promise<DeleteTransitRouterEcrAttachmentResponse>;
    /**
     * 您可以调用CreateTransitRouterEcrAttachment接口将要互通的专线网关ECR（ExpressConnect Router）网络实例连接到同地域的转发路由器实例中。
     */
    CreateTransitRouterEcrAttachment(query: CreateTransitRouterEcrAttachmentRequest): Promise<CreateTransitRouterEcrAttachmentResponse>;
    /**
     * 调用ListTransitRouterEcrAttachments接口查询企业版转发路由器下的专线网关ECR总条目数、连接的状态、连接 ID、网络实例的付费方等连接信息。
     */
    ListTransitRouterEcrAttachments(query: ListTransitRouterEcrAttachmentsRequest): Promise<ListTransitRouterEcrAttachmentsResponse>;
}
export default CBN;
