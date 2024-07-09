import { DescribeInstanceConfigsRequest } from "./DescribeInstanceConfigs/req";
import { DescribeInstanceConfigsResponse } from "./DescribeInstanceConfigs/res";
import { UpdatePublicNetworkStatusRequest } from "./UpdatePublicNetworkStatus/req";
import { UpdatePublicNetworkStatusResponse } from "./UpdatePublicNetworkStatus/res";
import { UpdateAccessControlListRequest } from "./UpdateAccessControlList/req";
import { UpdateAccessControlListResponse } from "./UpdateAccessControlList/res";
import { ModifyInstanceConfigRequest } from "./ModifyInstanceConfig/req";
import { ModifyInstanceConfigResponse } from "./ModifyInstanceConfig/res";
import { UpdateInstanceNameRequest } from "./UpdateInstanceName/req";
import { UpdateInstanceNameResponse } from "./UpdateInstanceName/res";
import { DescribeAccessControlListRequest } from "./DescribeAccessControlList/req";
import { DescribeAccessControlListResponse } from "./DescribeAccessControlList/res";
import { GetInstanceDetailRequest } from "./GetInstanceDetail/req";
import { GetInstanceDetailResponse } from "./GetInstanceDetail/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";

interface MILVUS {
    /**
     * 获取Milvus各个组件自定义配置的信息。
     */
    DescribeInstanceConfigs(query: DescribeInstanceConfigsRequest): Promise<DescribeInstanceConfigsResponse>;
    /**
     * 开启/关闭Milvus公网访问能力。
     */
    UpdatePublicNetworkStatus(query: UpdatePublicNetworkStatusRequest): Promise<UpdatePublicNetworkStatusResponse>;
    /**
     * 设置Milvus公网访问IP白名单。
     */
    UpdateAccessControlList(query: UpdateAccessControlListRequest): Promise<UpdateAccessControlListResponse>;
    /**
     * 更新Milvus各个组件的配置参数。
     */
    ModifyInstanceConfig(query: ModifyInstanceConfigRequest): Promise<ModifyInstanceConfigResponse>;
    /**
     * 修改实例名称。
     */
    UpdateInstanceName(query: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse>;
    /**
     * 获取Milvus实例公网访问IP白名单。
     */
    DescribeAccessControlList(query: DescribeAccessControlListRequest): Promise<DescribeAccessControlListResponse>;
    /**
     * 获取单个实例的详细信息。
     */
    GetInstanceDetail(query: GetInstanceDetailRequest): Promise<GetInstanceDetailResponse>;
    /**
     * 获取当前账号下Milvus实例列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
}
export default MILVUS;
