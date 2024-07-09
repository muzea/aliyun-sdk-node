import { ApplyDataModelConfigInfoRequest } from "./ApplyDataModelConfigInfo/req";
import { ApplyDataModelConfigInfoResponse } from "./ApplyDataModelConfigInfo/res";
import { AttachDataRequest } from "./AttachData/req";
import { AttachDataResponse } from "./AttachData/res";
import { GetBlockChainInfoRequest } from "./GetBlockChainInfo/req";
import { GetBlockChainInfoResponse } from "./GetBlockChainInfo/res";
import { AttachDataWithSignatureRequest } from "./AttachDataWithSignature/req";
import { AttachDataWithSignatureResponse } from "./AttachDataWithSignature/res";
import { GetDataRequest } from "./GetData/req";
import { GetDataResponse } from "./GetData/res";
import { GetDataModelConfigInfoRequest } from "./GetDataModelConfigInfo/req";
import { GetDataModelConfigInfoResponse } from "./GetDataModelConfigInfo/res";
import { GetHistoryDataCountRequest } from "./GetHistoryDataCount/req";
import { GetHistoryDataCountResponse } from "./GetHistoryDataCount/res";
import { GetHistoryDataListRequest } from "./GetHistoryDataList/req";
import { GetHistoryDataListResponse } from "./GetHistoryDataList/res";
import { ListDependentDataModelsRequest } from "./ListDependentDataModels/req";
import { ListDependentDataModelsResponse } from "./ListDependentDataModels/res";
import { SetDataRequest } from "./SetData/req";
import { SetDataResponse } from "./SetData/res";
import { SetDataWithSignatureRequest } from "./SetDataWithSignature/req";
import { SetDataWithSignatureResponse } from "./SetDataWithSignature/res";
import { AuthorizeDeviceGroupRequest } from "./AuthorizeDeviceGroup/req";
import { AuthorizeDeviceGroupResponse } from "./AuthorizeDeviceGroup/res";
import { AuthorizeDeviceRequest } from "./AuthorizeDevice/req";
import { AuthorizeDeviceResponse } from "./AuthorizeDevice/res";
import { BatchUploadMPCoSPhaseDigestInfoRequest } from "./BatchUploadMPCoSPhaseDigestInfo/req";
import { BatchUploadMPCoSPhaseDigestInfoResponse } from "./BatchUploadMPCoSPhaseDigestInfo/res";
import { BatchUploadMPCoSPhaseDigestInfoByDeviceRequest } from "./BatchUploadMPCoSPhaseDigestInfoByDevice/req";
import { BatchUploadMPCoSPhaseDigestInfoByDeviceResponse } from "./BatchUploadMPCoSPhaseDigestInfoByDevice/res";
import { BatchUploadMPCoSPhaseTextInfoRequest } from "./BatchUploadMPCoSPhaseTextInfo/req";
import { BatchUploadMPCoSPhaseTextInfoResponse } from "./BatchUploadMPCoSPhaseTextInfo/res";
import { BatchUploadMPCoSPhaseTextInfoByDeviceRequest } from "./BatchUploadMPCoSPhaseTextInfoByDevice/req";
import { BatchUploadMPCoSPhaseTextInfoByDeviceResponse } from "./BatchUploadMPCoSPhaseTextInfoByDevice/res";
import { CreateMPCoSPhaseRequest } from "./CreateMPCoSPhase/req";
import { CreateMPCoSPhaseResponse } from "./CreateMPCoSPhase/res";
import { CreateMPCoSPhaseGroupRequest } from "./CreateMPCoSPhaseGroup/req";
import { CreateMPCoSPhaseGroupResponse } from "./CreateMPCoSPhaseGroup/res";
import { CreateMemberRequest } from "./CreateMember/req";
import { CreateMemberResponse } from "./CreateMember/res";
import { DescribeCapacityInfoRequest } from "./DescribeCapacityInfo/req";
import { DescribeCapacityInfoResponse } from "./DescribeCapacityInfo/res";
import { DescribeMPCoSAuthorizedInfoRequest } from "./DescribeMPCoSAuthorizedInfo/req";
import { DescribeMPCoSAuthorizedInfoResponse } from "./DescribeMPCoSAuthorizedInfo/res";
import { DescribeMPCoSPhaseInfoRequest } from "./DescribeMPCoSPhaseInfo/req";
import { DescribeMPCoSPhaseInfoResponse } from "./DescribeMPCoSPhaseInfo/res";
import { DescribeMPCoSResourceInfoRequest } from "./DescribeMPCoSResourceInfo/req";
import { DescribeMPCoSResourceInfoResponse } from "./DescribeMPCoSResourceInfo/res";
import { DescribeMemberCapacityInfoRequest } from "./DescribeMemberCapacityInfo/req";
import { DescribeMemberCapacityInfoResponse } from "./DescribeMemberCapacityInfo/res";
import { DescribeResourceInfoRequest } from "./DescribeResourceInfo/req";
import { DescribeResourceInfoResponse } from "./DescribeResourceInfo/res";
import { ListDeviceRequest } from "./ListDevice/req";
import { ListDeviceResponse } from "./ListDevice/res";
import { ListDeviceGroupRequest } from "./ListDeviceGroup/req";
import { ListDeviceGroupResponse } from "./ListDeviceGroup/res";
import { ListMPCoSPhaseRequest } from "./ListMPCoSPhase/req";
import { ListMPCoSPhaseResponse } from "./ListMPCoSPhase/res";
import { ListMPCoSPhaseGroupRequest } from "./ListMPCoSPhaseGroup/req";
import { ListMPCoSPhaseGroupResponse } from "./ListMPCoSPhaseGroup/res";
import { ListMPCoSPhaseHistoryRequest } from "./ListMPCoSPhaseHistory/req";
import { ListMPCoSPhaseHistoryResponse } from "./ListMPCoSPhaseHistory/res";
import { ListMemberRequest } from "./ListMember/req";
import { ListMemberResponse } from "./ListMember/res";
import { ListMultiPartyCollaborationChainRequest } from "./ListMultiPartyCollaborationChain/req";
import { ListMultiPartyCollaborationChainResponse } from "./ListMultiPartyCollaborationChain/res";
import { ListPSMemberDataTypeCodeRequest } from "./ListPSMemberDataTypeCode/req";
import { ListPSMemberDataTypeCodeResponse } from "./ListPSMemberDataTypeCode/res";
import { ListProofChainRequest } from "./ListProofChain/req";
import { ListProofChainResponse } from "./ListProofChain/res";
import { LockMemberRequest } from "./LockMember/req";
import { LockMemberResponse } from "./LockMember/res";
import { ModifyMPCoSPhaseRequest } from "./ModifyMPCoSPhase/req";
import { ModifyMPCoSPhaseResponse } from "./ModifyMPCoSPhase/res";
import { ModifyMPCoSPhaseGroupRequest } from "./ModifyMPCoSPhaseGroup/req";
import { ModifyMPCoSPhaseGroupResponse } from "./ModifyMPCoSPhaseGroup/res";
import { ModifyMemberRequest } from "./ModifyMember/req";
import { ModifyMemberResponse } from "./ModifyMember/res";
import { RegisterDeviceGroupRequest } from "./RegisterDeviceGroup/req";
import { RegisterDeviceGroupResponse } from "./RegisterDeviceGroup/res";
import { UnAuthorizeDeviceRequest } from "./UnAuthorizeDevice/req";
import { UnAuthorizeDeviceResponse } from "./UnAuthorizeDevice/res";
import { UnAuthorizeDeviceGroupRequest } from "./UnAuthorizeDeviceGroup/req";
import { UnAuthorizeDeviceGroupResponse } from "./UnAuthorizeDeviceGroup/res";
import { UnLockMemberRequest } from "./UnLockMember/req";
import { UnLockMemberResponse } from "./UnLockMember/res";
import { UpdateMPCoSAuthorizedInfoRequest } from "./UpdateMPCoSAuthorizedInfo/req";
import { UpdateMPCoSAuthorizedInfoResponse } from "./UpdateMPCoSAuthorizedInfo/res";
import { UploadMPCoSPhaseDigestInfoRequest } from "./UploadMPCoSPhaseDigestInfo/req";
import { UploadMPCoSPhaseDigestInfoResponse } from "./UploadMPCoSPhaseDigestInfo/res";
import { UploadMPCoSPhaseDigestInfoByDeviceRequest } from "./UploadMPCoSPhaseDigestInfoByDevice/req";
import { UploadMPCoSPhaseDigestInfoByDeviceResponse } from "./UploadMPCoSPhaseDigestInfoByDevice/res";
import { UploadMPCoSPhaseTextInfoRequest } from "./UploadMPCoSPhaseTextInfo/req";
import { UploadMPCoSPhaseTextInfoResponse } from "./UploadMPCoSPhaseTextInfo/res";
import { UploadMPCoSPhaseTextInfoByDeviceRequest } from "./UploadMPCoSPhaseTextInfoByDevice/req";
import { UploadMPCoSPhaseTextInfoByDeviceResponse } from "./UploadMPCoSPhaseTextInfoByDevice/res";

interface LTL {
    /**
     * 应用自定义数据模型配置信息。
     */
    ApplyDataModelConfigInfo(query: ApplyDataModelConfigInfoRequest): Promise<ApplyDataModelConfigInfoResponse>;
    /**
     * 用于向IoT区块链可信应用系统多次上传数据。
     */
    AttachData(query: AttachDataRequest): Promise<AttachDataResponse>;
    /**
     * 用于查询上传数据的区块链元信息。
     */
    GetBlockChainInfo(query: GetBlockChainInfoRequest): Promise<GetBlockChainInfoResponse>;
    /**
     * 用于向 IoT区块链可信应用系统多次上传数据，并且上传的数据必须由 IoT设备端进行签名。
     */
    AttachDataWithSignature(query: AttachDataWithSignatureRequest): Promise<AttachDataWithSignatureResponse>;
    /**
     * 用于确认之前上传的数据已处理成功。
     */
    GetData(query: GetDataRequest): Promise<GetDataResponse>;
    /**
     * 用户查询自定义数据模型配置信息。
     */
    GetDataModelConfigInfo(query: GetDataModelConfigInfoRequest): Promise<GetDataModelConfigInfoResponse>;
    /**
     * 历史数据数量查询，该API用于从 IoT区块链可信应用系统查询历史数据条数 。
     */
    GetHistoryDataCount(query: GetHistoryDataCountRequest): Promise<GetHistoryDataCountResponse>;
    /**
     * 历史数据查询，该API用于从 IoT区块链可信应用系统查询历史数据 。
     */
    GetHistoryDataList(query: GetHistoryDataListRequest): Promise<GetHistoryDataListResponse>;
    /**
     * 用于查询自定义模型列表。
     */
    ListDependentDataModels(query: ListDependentDataModelsRequest): Promise<ListDependentDataModelsResponse>;
    /**
     * 数据上传，该API用于向LTL上传数据。
     */
    SetData(query: SetDataRequest): Promise<SetDataResponse>;
    /**
     * 用于上传数据，并且上传的数据必须由IoT设备端进行签名。
     */
    SetDataWithSignature(query: SetDataWithSignatureRequest): Promise<SetDataWithSignatureResponse>;
    /**
     * 授权IoT数据源组下的设备接入区块链的权限。
     */
    AuthorizeDeviceGroup(query: AuthorizeDeviceGroupRequest): Promise<AuthorizeDeviceGroupResponse>;
    /**
     * 授权指定设备接入区块链权限。
     */
    AuthorizeDevice(query: AuthorizeDeviceRequest): Promise<AuthorizeDeviceResponse>;
    /**
     * 批量上传阶段数据的摘要信息到区块链，并同时可以绑定所关联的其它阶段数据。
     */
    BatchUploadMPCoSPhaseDigestInfo(query: BatchUploadMPCoSPhaseDigestInfoRequest): Promise<BatchUploadMPCoSPhaseDigestInfoResponse>;
    /**
     * 通过IoT设备签名后，批量上传阶段数据的摘要信息到区块链，并同时可以绑定所关联的其它阶段数据。
     */
    BatchUploadMPCoSPhaseDigestInfoByDevice(query: BatchUploadMPCoSPhaseDigestInfoByDeviceRequest): Promise<BatchUploadMPCoSPhaseDigestInfoByDeviceResponse>;
    /**
     * 批量上传文本类型的阶段数据到区块链，并同时可以绑定所关联的其它阶段数据。
     */
    BatchUploadMPCoSPhaseTextInfo(query: BatchUploadMPCoSPhaseTextInfoRequest): Promise<BatchUploadMPCoSPhaseTextInfoResponse>;
    /**
     * 通过IoT设备签名后，批量上传文本类型的阶段数据到区块链，并同时可以绑定所关联的其它阶段数据。
     */
    BatchUploadMPCoSPhaseTextInfoByDevice(query: BatchUploadMPCoSPhaseTextInfoByDeviceRequest): Promise<BatchUploadMPCoSPhaseTextInfoByDeviceResponse>;
    /**
     * 在协同模型中创建阶段。
     */
    CreateMPCoSPhase(query: CreateMPCoSPhaseRequest): Promise<CreateMPCoSPhaseResponse>;
    /**
     * 创建协同模型信息。
     */
    CreateMPCoSPhaseGroup(query: CreateMPCoSPhaseGroupRequest): Promise<CreateMPCoSPhaseGroupResponse>;
    /**
     * 管理方创建使用方账户。
     */
    CreateMember(query: CreateMemberRequest): Promise<CreateMemberResponse>;
    /**
     * 查询资源容量统计信息。
     */
    DescribeCapacityInfo(query: DescribeCapacityInfoRequest): Promise<DescribeCapacityInfoResponse>;
    /**
     * 查询账户在协同模型中的权限信息。
     */
    DescribeMPCoSAuthorizedInfo(query: DescribeMPCoSAuthorizedInfoRequest): Promise<DescribeMPCoSAuthorizedInfoResponse>;
    /**
     * 通过阶段标识，数据唯一标识，和序列号查询唯一一条上链数据和所关联数据。
     */
    DescribeMPCoSPhaseInfo(query: DescribeMPCoSPhaseInfoRequest): Promise<DescribeMPCoSPhaseInfoResponse>;
    /**
     * 查询业务链配额和使用情况。
     */
    DescribeMPCoSResourceInfo(query: DescribeMPCoSResourceInfoRequest): Promise<DescribeMPCoSResourceInfoResponse>;
    /**
     * 查询使用方容量统计信息。
     */
    DescribeMemberCapacityInfo(query: DescribeMemberCapacityInfoRequest): Promise<DescribeMemberCapacityInfoResponse>;
    /**
     * 查询资源开通信息。
     */
    DescribeResourceInfo(query: DescribeResourceInfoRequest): Promise<DescribeResourceInfoResponse>;
    /**
     * 查询IoT数据源组下的所有设备。
     */
    ListDevice(query: ListDeviceRequest): Promise<ListDeviceResponse>;
    /**
     * 查询IoT数据源组列表
     * 使用方可查看自己注册的IoT数据源组
     * 管理方可查看项目下所有的IoT数据源组。
     */
    ListDeviceGroup(query: ListDeviceGroupRequest): Promise<ListDeviceGroupResponse>;
    /**
     * 查询协同模型所属的阶段列表。
     */
    ListMPCoSPhase(query: ListMPCoSPhaseRequest): Promise<ListMPCoSPhaseResponse>;
    /**
     * 查询业务链所属的协同模型列表。
     */
    ListMPCoSPhaseGroup(query: ListMPCoSPhaseGroupRequest): Promise<ListMPCoSPhaseGroupResponse>;
    /**
     * 通过阶段标识，数据唯一标识，起始时间，结束时间，查询数据列表。
     */
    ListMPCoSPhaseHistory(query: ListMPCoSPhaseHistoryRequest): Promise<ListMPCoSPhaseHistoryResponse>;
    /**
     * 查询使用方账户列表。
     */
    ListMember(query: ListMemberRequest): Promise<ListMemberResponse>;
    /**
     * 用于查询多方任务协同业务链列表。
     */
    ListMultiPartyCollaborationChain(query: ListMultiPartyCollaborationChainRequest): Promise<ListMultiPartyCollaborationChainResponse>;
    /**
     * 查询接入方账号下存证类型编码。
     */
    ListPSMemberDataTypeCode(query: ListPSMemberDataTypeCodeRequest): Promise<ListPSMemberDataTypeCodeResponse>;
    /**
     * 用于查询存证与溯源业务链列表。
     */
    ListProofChain(query: ListProofChainRequest): Promise<ListProofChainResponse>;
    /**
     * 锁定使用方账户，锁定账户后则账户不能访问当前区块链。
     */
    LockMember(query: LockMemberRequest): Promise<LockMemberResponse>;
    /**
     * 在协同模型中修改阶段信息。
     */
    ModifyMPCoSPhase(query: ModifyMPCoSPhaseRequest): Promise<ModifyMPCoSPhaseResponse>;
    /**
     * 修改协同模型信息。
     */
    ModifyMPCoSPhaseGroup(query: ModifyMPCoSPhaseGroupRequest): Promise<ModifyMPCoSPhaseGroupResponse>;
    /**
     * 修改账户信息。
     */
    ModifyMember(query: ModifyMemberRequest): Promise<ModifyMemberResponse>;
    /**
     * 注册IoT数据源组。
     */
    RegisterDeviceGroup(query: RegisterDeviceGroupRequest): Promise<RegisterDeviceGroupResponse>;
    /**
     * 取消指定设备接入区块链权限。
     */
    UnAuthorizeDevice(query: UnAuthorizeDeviceRequest): Promise<UnAuthorizeDeviceResponse>;
    /**
     * 取消指定IoT数据源组下的设备接入区块链的权限。
     */
    UnAuthorizeDeviceGroup(query: UnAuthorizeDeviceGroupRequest): Promise<UnAuthorizeDeviceGroupResponse>;
    /**
     * 解锁使用方账户，解锁后账户可访问区块链。
     */
    UnLockMember(query: UnLockMemberRequest): Promise<UnLockMemberResponse>;
    /**
     * 更新账户在协同模型中的权限信息。
     */
    UpdateMPCoSAuthorizedInfo(query: UpdateMPCoSAuthorizedInfoRequest): Promise<UpdateMPCoSAuthorizedInfoResponse>;
    /**
     * 上传阶段数据的摘要信息到区块链，并同时可以绑定所关联的其它阶段数据。
     */
    UploadMPCoSPhaseDigestInfo(query: UploadMPCoSPhaseDigestInfoRequest): Promise<UploadMPCoSPhaseDigestInfoResponse>;
    /**
     * 通过IoT设备签名后，上传阶段数据的摘要信息到区块链，并同时可以绑定所关联的其它阶段数据。
     */
    UploadMPCoSPhaseDigestInfoByDevice(query: UploadMPCoSPhaseDigestInfoByDeviceRequest): Promise<UploadMPCoSPhaseDigestInfoByDeviceResponse>;
    /**
     * 上传文本类型的阶段数据到区块链，并同时可以绑定所关联的其它阶段数据。
     */
    UploadMPCoSPhaseTextInfo(query: UploadMPCoSPhaseTextInfoRequest): Promise<UploadMPCoSPhaseTextInfoResponse>;
    /**
     * 通过IoT设备签名后，上传文本类型的阶段数据到区块链，并同时可以绑定所关联的其它阶段数据。
     */
    UploadMPCoSPhaseTextInfoByDevice(query: UploadMPCoSPhaseTextInfoByDeviceRequest): Promise<UploadMPCoSPhaseTextInfoByDeviceResponse>;
}
export default LTL;
