import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { DescribeAvailableResourceRequest } from "./DescribeAvailableResource/req";
import { DescribeAvailableResourceResponse } from "./DescribeAvailableResource/res";
import { DescribeEnsRegionsRequest } from "./DescribeEnsRegions/req";
import { DescribeEnsRegionsResponse } from "./DescribeEnsRegions/res";
import { DescribeImageInfosRequest } from "./DescribeImageInfos/req";
import { DescribeImageInfosResponse } from "./DescribeImageInfos/res";
import { DescribeImagesRequest } from "./DescribeImages/req";
import { DescribeImagesResponse } from "./DescribeImages/res";
import { DescribeInstanceAutoRenewAttributeRequest } from "./DescribeInstanceAutoRenewAttribute/req";
import { DescribeInstanceAutoRenewAttributeResponse } from "./DescribeInstanceAutoRenewAttribute/res";
import { DescribeInstanceMonitorDataRequest } from "./DescribeInstanceMonitorData/req";
import { DescribeInstanceMonitorDataResponse } from "./DescribeInstanceMonitorData/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { DescribeUserBandWidthDataRequest } from "./DescribeUserBandWidthData/req";
import { DescribeUserBandWidthDataResponse } from "./DescribeUserBandWidthData/res";
import { EnsAddConsumerApiRequest } from "./EnsAddConsumerApi/req";
import { EnsAddConsumerApiResponse } from "./EnsAddConsumerApi/res";
import { ModifyInstanceAttributeRequest } from "./ModifyInstanceAttribute/req";
import { ModifyInstanceAttributeResponse } from "./ModifyInstanceAttribute/res";
import { RebootInstanceRequest } from "./RebootInstance/req";
import { RebootInstanceResponse } from "./RebootInstance/res";
import { StartInstanceRequest } from "./StartInstance/req";
import { StartInstanceResponse } from "./StartInstance/res";
import { StopInstanceRequest } from "./StopInstance/req";
import { StopInstanceResponse } from "./StopInstance/res";
import { DescribeInstanceSpecRequest } from "./DescribeInstanceSpec/req";
import { DescribeInstanceSpecResponse } from "./DescribeInstanceSpec/res";
import { DescribeInstanceTypesRequest } from "./DescribeInstanceTypes/req";
import { DescribeInstanceTypesResponse } from "./DescribeInstanceTypes/res";
import { DescribeReservedResourceRequest } from "./DescribeReservedResource/req";
import { DescribeReservedResourceResponse } from "./DescribeReservedResource/res";
import { ModifyImageAttributeRequest } from "./ModifyImageAttribute/req";
import { ModifyImageAttributeResponse } from "./ModifyImageAttribute/res";
import { AttachEnsInstancesRequest } from "./AttachEnsInstances/req";
import { AttachEnsInstancesResponse } from "./AttachEnsInstances/res";
import { DescribeEnsNetDistrictRequest } from "./DescribeEnsNetDistrict/req";
import { DescribeEnsNetDistrictResponse } from "./DescribeEnsNetDistrict/res";
import { AllocateEipAddressRequest } from "./AllocateEipAddress/req";
import { AllocateEipAddressResponse } from "./AllocateEipAddress/res";
import { AssociateEipAddressRequest } from "./AssociateEipAddress/req";
import { AssociateEipAddressResponse } from "./AssociateEipAddress/res";
import { DescribeEipAddressesRequest } from "./DescribeEipAddresses/req";
import { DescribeEipAddressesResponse } from "./DescribeEipAddresses/res";
import { ReleaseEipAddressRequest } from "./ReleaseEipAddress/req";
import { ReleaseEipAddressResponse } from "./ReleaseEipAddress/res";
import { UnassociateEipAddressRequest } from "./UnassociateEipAddress/req";
import { UnassociateEipAddressResponse } from "./UnassociateEipAddress/res";
import { ReleasePostPaidInstanceRequest } from "./ReleasePostPaidInstance/req";
import { ReleasePostPaidInstanceResponse } from "./ReleasePostPaidInstance/res";
import { ReleasePrePaidInstanceRequest } from "./ReleasePrePaidInstance/req";
import { ReleasePrePaidInstanceResponse } from "./ReleasePrePaidInstance/res";
import { DescribePrePaidInstanceStockRequest } from "./DescribePrePaidInstanceStock/req";
import { DescribePrePaidInstanceStockResponse } from "./DescribePrePaidInstanceStock/res";

interface ENS {
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    DescribeAvailableResource(query: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse>;
    DescribeEnsRegions(query: DescribeEnsRegionsRequest): Promise<DescribeEnsRegionsResponse>;
    DescribeImageInfos(query: DescribeImageInfosRequest): Promise<DescribeImageInfosResponse>;
    DescribeImages(query: DescribeImagesRequest): Promise<DescribeImagesResponse>;
    DescribeInstanceAutoRenewAttribute(query: DescribeInstanceAutoRenewAttributeRequest): Promise<DescribeInstanceAutoRenewAttributeResponse>;
    DescribeInstanceMonitorData(query: DescribeInstanceMonitorDataRequest): Promise<DescribeInstanceMonitorDataResponse>;
    DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    DescribeUserBandWidthData(query: DescribeUserBandWidthDataRequest): Promise<DescribeUserBandWidthDataResponse>;
    EnsAddConsumerApi(query: EnsAddConsumerApiRequest): Promise<EnsAddConsumerApiResponse>;
    ModifyInstanceAttribute(query: ModifyInstanceAttributeRequest): Promise<ModifyInstanceAttributeResponse>;
    RebootInstance(query: RebootInstanceRequest): Promise<RebootInstanceResponse>;
    StartInstance(query: StartInstanceRequest): Promise<StartInstanceResponse>;
    StopInstance(query: StopInstanceRequest): Promise<StopInstanceResponse>;
    DescribeInstanceSpec(query: DescribeInstanceSpecRequest): Promise<DescribeInstanceSpecResponse>;
    DescribeInstanceTypes(query: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse>;
    DescribeReservedResource(query: DescribeReservedResourceRequest): Promise<DescribeReservedResourceResponse>;
    ModifyImageAttribute(query: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse>;
    AttachEnsInstances(query: AttachEnsInstancesRequest): Promise<AttachEnsInstancesResponse>;
    DescribeEnsNetDistrict(query: DescribeEnsNetDistrictRequest): Promise<DescribeEnsNetDistrictResponse>;
    AllocateEipAddress(query: AllocateEipAddressRequest): Promise<AllocateEipAddressResponse>;
    AssociateEipAddress(query: AssociateEipAddressRequest): Promise<AssociateEipAddressResponse>;
    DescribeEipAddresses(query: DescribeEipAddressesRequest): Promise<DescribeEipAddressesResponse>;
    ReleaseEipAddress(query: ReleaseEipAddressRequest): Promise<ReleaseEipAddressResponse>;
    UnassociateEipAddress(query: UnassociateEipAddressRequest): Promise<UnassociateEipAddressResponse>;
    ReleasePostPaidInstance(query: ReleasePostPaidInstanceRequest): Promise<ReleasePostPaidInstanceResponse>;
    ReleasePrePaidInstance(query: ReleasePrePaidInstanceRequest): Promise<ReleasePrePaidInstanceResponse>;
    DescribePrePaidInstanceStock(query: DescribePrePaidInstanceStockRequest): Promise<DescribePrePaidInstanceStockResponse>;
}
export default ENS;
