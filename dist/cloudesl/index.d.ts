import { ActivateApDeviceRequest } from "./ActivateApDevice/req";
import { ActivateApDeviceResponse } from "./ActivateApDevice/res";
import { AddApDeviceRequest } from "./AddApDevice/req";
import { AddApDeviceResponse } from "./AddApDevice/res";
import { AddUserRequest } from "./AddUser/req";
import { AddUserResponse } from "./AddUser/res";
import { AssignUserRequest } from "./AssignUser/req";
import { AssignUserResponse } from "./AssignUser/res";
import { BindEslDeviceRequest } from "./BindEslDevice/req";
import { BindEslDeviceResponse } from "./BindEslDevice/res";
import { BatchInsertItemsRequest } from "./BatchInsertItems/req";
import { BatchInsertItemsResponse } from "./BatchInsertItems/res";
import { CreateStoreRequest } from "./CreateStore/req";
import { CreateStoreResponse } from "./CreateStore/res";
import { DeleteApDeviceRequest } from "./DeleteApDevice/req";
import { DeleteApDeviceResponse } from "./DeleteApDevice/res";
import { DeleteStoreRequest } from "./DeleteStore/req";
import { DeleteStoreResponse } from "./DeleteStore/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { DescribeApDevicesRequest } from "./DescribeApDevices/req";
import { DescribeApDevicesResponse } from "./DescribeApDevices/res";
import { DescribeBindersRequest } from "./DescribeBinders/req";
import { DescribeBindersResponse } from "./DescribeBinders/res";
import { DescribeEslDevicesRequest } from "./DescribeEslDevices/req";
import { DescribeEslDevicesResponse } from "./DescribeEslDevices/res";
import { DescribeItemsRequest } from "./DescribeItems/req";
import { DescribeItemsResponse } from "./DescribeItems/res";
import { DescribeStoreConfigRequest } from "./DescribeStoreConfig/req";
import { DescribeStoreConfigResponse } from "./DescribeStoreConfig/res";
import { DescribeStoresRequest } from "./DescribeStores/req";
import { DescribeStoresResponse } from "./DescribeStores/res";
import { DescribeUserLogRequest } from "./DescribeUserLog/req";
import { DescribeUserLogResponse } from "./DescribeUserLog/res";
import { DescribeUsersRequest } from "./DescribeUsers/req";
import { DescribeUsersResponse } from "./DescribeUsers/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { UnassignUserRequest } from "./UnassignUser/req";
import { UnassignUserResponse } from "./UnassignUser/res";
import { UnbindEslDeviceRequest } from "./UnbindEslDevice/req";
import { UnbindEslDeviceResponse } from "./UnbindEslDevice/res";
import { UpdateEslDeviceLightRequest } from "./UpdateEslDeviceLight/req";
import { UpdateEslDeviceLightResponse } from "./UpdateEslDeviceLight/res";
import { UpdateStoreRequest } from "./UpdateStore/req";
import { UpdateStoreResponse } from "./UpdateStore/res";
import { UpdateStoreConfigRequest } from "./UpdateStoreConfig/req";
import { UpdateStoreConfigResponse } from "./UpdateStoreConfig/res";
import { DeleteItemRequest } from "./DeleteItem/req";
import { DeleteItemResponse } from "./DeleteItem/res";
import { DescribeEslDeviceRequest } from "./DescribeEslDevice/req";
import { DescribeEslDeviceResponse } from "./DescribeEslDevice/res";
import { ApplyCompanyTemplateVersionToStoresRequest } from "./ApplyCompanyTemplateVersionToStores/req";
import { ApplyCompanyTemplateVersionToStoresResponse } from "./ApplyCompanyTemplateVersionToStores/res";
import { DescribeStoreByTemplateVersionRequest } from "./DescribeStoreByTemplateVersion/req";
import { DescribeStoreByTemplateVersionResponse } from "./DescribeStoreByTemplateVersion/res";
import { DescribeCompanyTemplateVersionsRequest } from "./DescribeCompanyTemplateVersions/req";
import { DescribeCompanyTemplateVersionsResponse } from "./DescribeCompanyTemplateVersions/res";
import { DescribeEslModelByTemplateVersionRequest } from "./DescribeEslModelByTemplateVersion/req";
import { DescribeEslModelByTemplateVersionResponse } from "./DescribeEslModelByTemplateVersion/res";
import { DescribeTemplateByModelRequest } from "./DescribeTemplateByModel/req";
import { DescribeTemplateByModelResponse } from "./DescribeTemplateByModel/res";
import { DescribeAvailableEslModelsRequest } from "./DescribeAvailableEslModels/req";
import { DescribeAvailableEslModelsResponse } from "./DescribeAvailableEslModels/res";
import { DeleteCompanyTemplateRequest } from "./DeleteCompanyTemplate/req";
import { DeleteCompanyTemplateResponse } from "./DeleteCompanyTemplate/res";
import { AddCompanyTemplateRequest } from "./AddCompanyTemplate/req";
import { AddCompanyTemplateResponse } from "./AddCompanyTemplate/res";
import { SyncAddMaterialRequest } from "./SyncAddMaterial/req";
import { SyncAddMaterialResponse } from "./SyncAddMaterial/res";
import { QueryTemplateListByGroupIdRequest } from "./QueryTemplateListByGroupId/req";
import { QueryTemplateListByGroupIdResponse } from "./QueryTemplateListByGroupId/res";

interface CLOUDESL {
    /**
     * 激活基站设备
     */
    ActivateApDevice(query: ActivateApDeviceRequest): Promise<ActivateApDeviceResponse>;
    /**
     * 增加指定MAC地址的基站设备，会自动尝试进行激活。
     */
    AddApDevice(query: AddApDeviceRequest): Promise<AddApDeviceResponse>;
    /**
     * 新增用户。
     */
    AddUser(query: AddUserRequest): Promise<AddUserResponse>;
    /**
     * 分配用户权限。
     */
    AssignUser(query: AssignUserRequest): Promise<AssignUserResponse>;
    /**
     * 绑定价签设备。
     */
    BindEslDevice(query: BindEslDeviceRequest): Promise<BindEslDeviceResponse>;
    /**
     * 批量新增或修改商品信息，一次最大商品数量为100条，每次不能包含相同的商品条码。
     */
    BatchInsertItems(query: BatchInsertItemsRequest): Promise<BatchInsertItemsResponse>;
    /**
     * 增加一个门店。
     */
    CreateStore(query: CreateStoreRequest): Promise<CreateStoreResponse>;
    /**
     * 删除指定MAC地址的基站设备。
     */
    DeleteApDevice(query: DeleteApDeviceRequest): Promise<DeleteApDeviceResponse>;
    /**
     * 删除门店。
     */
    DeleteStore(query: DeleteStoreRequest): Promise<DeleteStoreResponse>;
    /**
     * 删除用户。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 查询基站设备信息。
     */
    DescribeApDevices(query: DescribeApDevicesRequest): Promise<DescribeApDevicesResponse>;
    /**
     * 查询商品和价签的绑定信息。
     */
    DescribeBinders(query: DescribeBindersRequest): Promise<DescribeBindersResponse>;
    /**
     * 查询价签设备信息。
     */
    DescribeEslDevices(query: DescribeEslDevicesRequest): Promise<DescribeEslDevicesResponse>;
    /**
     * 查询商品信。
     */
    DescribeItems(query: DescribeItemsRequest): Promise<DescribeItemsResponse>;
    /**
     * 查询门店配置信息。
     */
    DescribeStoreConfig(query: DescribeStoreConfigRequest): Promise<DescribeStoreConfigResponse>;
    /**
     * 查询门店基础信息。
     */
    DescribeStores(query: DescribeStoresRequest): Promise<DescribeStoresResponse>;
    /**
     * 查询用户的操作日志记录。
     */
    DescribeUserLog(query: DescribeUserLogRequest): Promise<DescribeUserLogResponse>;
    /**
     * 查询用户信息。
     */
    DescribeUsers(query: DescribeUsersRequest): Promise<DescribeUsersResponse>;
    /**
     * 查询单个用户信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 取消用户权限。
     */
    UnassignUser(query: UnassignUserRequest): Promise<UnassignUserResponse>;
    /**
     * 解绑价签设备。
     */
    UnbindEslDevice(query: UnbindEslDeviceRequest): Promise<UnbindEslDeviceResponse>;
    /**
     * 操作价签的Led灯，进行频率和色彩的变换。
     */
    UpdateEslDeviceLight(query: UpdateEslDeviceLightRequest): Promise<UpdateEslDeviceLightResponse>;
    /**
     * 修改门店基础信息。
     */
    UpdateStore(query: UpdateStoreRequest): Promise<UpdateStoreResponse>;
    /**
     * 修改门店的配置信息。
     */
    UpdateStoreConfig(query: UpdateStoreConfigRequest): Promise<UpdateStoreConfigResponse>;
    /**
     * 删除门店商品。
     */
    DeleteItem(query: DeleteItemRequest): Promise<DeleteItemResponse>;
    /**
     * 增量查询价签绑定状态
     */
    DescribeEslDevice(query: DescribeEslDeviceRequest): Promise<DescribeEslDeviceResponse>;
    /**
     * 版本应用到门店。
     */
    ApplyCompanyTemplateVersionToStores(query: ApplyCompanyTemplateVersionToStoresRequest): Promise<ApplyCompanyTemplateVersionToStoresResponse>;
    /**
     * 查询模板应用到的门店
     */
    DescribeStoreByTemplateVersion(query: DescribeStoreByTemplateVersionRequest): Promise<DescribeStoreByTemplateVersionResponse>;
    /**
     * 版本列表
     */
    DescribeCompanyTemplateVersions(query: DescribeCompanyTemplateVersionsRequest): Promise<DescribeCompanyTemplateVersionsResponse>;
    /**
     * 按版本查询设备类型
     */
    DescribeEslModelByTemplateVersion(query: DescribeEslModelByTemplateVersionRequest): Promise<DescribeEslModelByTemplateVersionResponse>;
    /**
     * 模板查询。
     */
    DescribeTemplateByModel(query: DescribeTemplateByModelRequest): Promise<DescribeTemplateByModelResponse>;
    DescribeAvailableEslModels(query: DescribeAvailableEslModelsRequest): Promise<DescribeAvailableEslModelsResponse>;
    DeleteCompanyTemplate(query: DeleteCompanyTemplateRequest): Promise<DeleteCompanyTemplateResponse>;
    /**
     * 模板新增。
     */
    AddCompanyTemplate(query: AddCompanyTemplateRequest): Promise<AddCompanyTemplateResponse>;
    /**
     * 异步添加媒体素材
     */
    SyncAddMaterial(query: SyncAddMaterialRequest): Promise<SyncAddMaterialResponse>;
    /**
     * 根据分组id查询模板
     */
    QueryTemplateListByGroupId(query: QueryTemplateListByGroupIdRequest): Promise<QueryTemplateListByGroupIdResponse>;
}
export default CLOUDESL;
