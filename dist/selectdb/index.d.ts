import { RestartDBClusterRequest } from "./RestartDBCluster/req";
import { RestartDBClusterResponse } from "./RestartDBCluster/res";
import { DeleteDBClusterRequest } from "./DeleteDBCluster/req";
import { DeleteDBClusterResponse } from "./DeleteDBCluster/res";
import { ModifySecurityIPListRequest } from "./ModifySecurityIPList/req";
import { ModifySecurityIPListResponse } from "./ModifySecurityIPList/res";
import { ResetAccountPasswordRequest } from "./ResetAccountPassword/req";
import { ResetAccountPasswordResponse } from "./ResetAccountPassword/res";
import { CreateDBClusterRequest } from "./CreateDBCluster/req";
import { CreateDBClusterResponse } from "./CreateDBCluster/res";
import { DescribeSecurityIPListRequest } from "./DescribeSecurityIPList/req";
import { DescribeSecurityIPListResponse } from "./DescribeSecurityIPList/res";
import { StopBEClusterRequest } from "./StopBECluster/req";
import { StopBEClusterResponse } from "./StopBECluster/res";
import { ModifyDBClusterRequest } from "./ModifyDBCluster/req";
import { ModifyDBClusterResponse } from "./ModifyDBCluster/res";
import { ModifyBEClusterAttributeRequest } from "./ModifyBEClusterAttribute/req";
import { ModifyBEClusterAttributeResponse } from "./ModifyBEClusterAttribute/res";
import { StartBEClusterRequest } from "./StartBECluster/req";
import { StartBEClusterResponse } from "./StartBECluster/res";
import { CheckCreateDBInstanceRequest } from "./CheckCreateDBInstance/req";
import { CheckCreateDBInstanceResponse } from "./CheckCreateDBInstance/res";
import { UpgradeDBInstanceEngineVersionRequest } from "./UpgradeDBInstanceEngineVersion/req";
import { UpgradeDBInstanceEngineVersionResponse } from "./UpgradeDBInstanceEngineVersion/res";
import { AllocateInstancePublicConnectionRequest } from "./AllocateInstancePublicConnection/req";
import { AllocateInstancePublicConnectionResponse } from "./AllocateInstancePublicConnection/res";
import { DescribeDBInstanceNetInfoRequest } from "./DescribeDBInstanceNetInfo/req";
import { DescribeDBInstanceNetInfoResponse } from "./DescribeDBInstanceNetInfo/res";
import { ModifyDBInstanceAttributeRequest } from "./ModifyDBInstanceAttribute/req";
import { ModifyDBInstanceAttributeResponse } from "./ModifyDBInstanceAttribute/res";
import { ReleaseInstancePublicConnectionRequest } from "./ReleaseInstancePublicConnection/req";
import { ReleaseInstancePublicConnectionResponse } from "./ReleaseInstancePublicConnection/res";
import { DescribeDBInstanceAttributeRequest } from "./DescribeDBInstanceAttribute/req";
import { DescribeDBInstanceAttributeResponse } from "./DescribeDBInstanceAttribute/res";
import { DescribeDBInstancesRequest } from "./DescribeDBInstances/req";
import { DescribeDBInstancesResponse } from "./DescribeDBInstances/res";
import { DeleteDBInstanceRequest } from "./DeleteDBInstance/req";
import { DeleteDBInstanceResponse } from "./DeleteDBInstance/res";
import { CreateDBInstanceRequest } from "./CreateDBInstance/req";
import { CreateDBInstanceResponse } from "./CreateDBInstance/res";
import { CheckServiceLinkedRoleRequest } from "./CheckServiceLinkedRole/req";
import { CheckServiceLinkedRoleResponse } from "./CheckServiceLinkedRole/res";
import { CreateServiceLinkedRoleForSelectDBRequest } from "./CreateServiceLinkedRoleForSelectDB/req";
import { CreateServiceLinkedRoleForSelectDBResponse } from "./CreateServiceLinkedRoleForSelectDB/res";
import { GetModifyBEClusterInquiryRequest } from "./GetModifyBEClusterInquiry/req";
import { GetModifyBEClusterInquiryResponse } from "./GetModifyBEClusterInquiry/res";
import { GetCreateBEClusterInquiryRequest } from "./GetCreateBEClusterInquiry/req";
import { GetCreateBEClusterInquiryResponse } from "./GetCreateBEClusterInquiry/res";
import { ModifyDBClusterConfigRequest } from "./ModifyDBClusterConfig/req";
import { ModifyDBClusterConfigResponse } from "./ModifyDBClusterConfig/res";
import { DescribeDBClusterConfigChangeLogsRequest } from "./DescribeDBClusterConfigChangeLogs/req";
import { DescribeDBClusterConfigChangeLogsResponse } from "./DescribeDBClusterConfigChangeLogs/res";
import { DescribeDBClusterConfigRequest } from "./DescribeDBClusterConfig/req";
import { DescribeDBClusterConfigResponse } from "./DescribeDBClusterConfig/res";

interface SELECTDB {
    /**
     * 重启指定云数据库SelectDB版实例的集群。
     */
    RestartDBCluster(query: RestartDBClusterRequest): Promise<RestartDBClusterResponse>;
    /**
     * 删除指定云数据库SelectDB版实例的集群。
     */
    DeleteDBCluster(query: DeleteDBClusterRequest): Promise<DeleteDBClusterResponse>;
    /**
     * 修改指定云数据库SelectDB版实例的白名单IP。
     */
    ModifySecurityIPList(query: ModifySecurityIPListRequest): Promise<ModifySecurityIPListResponse>;
    /**
     * 重置云数据库SelectDB版实例的账号密码。
     */
    ResetAccountPassword(query: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse>;
    /**
     * 为指定云数据库SelectDB版实例创建集群。
     */
    CreateDBCluster(query: CreateDBClusterRequest): Promise<CreateDBClusterResponse>;
    /**
     * 查询指定云数据库SelectDB版实例的白名单IP。
     */
    DescribeSecurityIPList(query: DescribeSecurityIPListRequest): Promise<DescribeSecurityIPListResponse>;
    /**
     * 停止指定云数据库SelectDB版集群。
     */
    StopBECluster(query: StopBEClusterRequest): Promise<StopBEClusterResponse>;
    /**
     * 为指定云数据库SelectDB版实例的集群扩缩容。
     */
    ModifyDBCluster(query: ModifyDBClusterRequest): Promise<ModifyDBClusterResponse>;
    /**
     * 为指定云数据库SelectDB版实例的集群修改运维时间或备注信息。
     */
    ModifyBEClusterAttribute(query: ModifyBEClusterAttributeRequest): Promise<ModifyBEClusterAttributeResponse>;
    /**
     * 启动指定云数据库SelectDB版集群。
     */
    StartBECluster(query: StartBEClusterRequest): Promise<StartBEClusterResponse>;
    /**
     * 创建云数据库SelectDB版实例前的预检查。
     */
    CheckCreateDBInstance(query: CheckCreateDBInstanceRequest): Promise<CheckCreateDBInstanceResponse>;
    /**
     * 升级指定云数据库SelectDB版实例的数据库版本。
     */
    UpgradeDBInstanceEngineVersion(query: UpgradeDBInstanceEngineVersionRequest): Promise<UpgradeDBInstanceEngineVersionResponse>;
    /**
     * 为指定云数据库SelectDB版实例申请公网地址。
     */
    AllocateInstancePublicConnection(query: AllocateInstancePublicConnectionRequest): Promise<AllocateInstancePublicConnectionResponse>;
    /**
     * 查询指定云数据库SelectDB版实例的网络信息。
     */
    DescribeDBInstanceNetInfo(query: DescribeDBInstanceNetInfoRequest): Promise<DescribeDBInstanceNetInfoResponse>;
    /**
     * 修改指定云数据库SelectDB版实例的运维时间或备注信息。
     */
    ModifyDBInstanceAttribute(query: ModifyDBInstanceAttributeRequest): Promise<ModifyDBInstanceAttributeResponse>;
    /**
     * 释放指定云数据库SelectDB版实例的公网地址。
     */
    ReleaseInstancePublicConnection(query: ReleaseInstancePublicConnectionRequest): Promise<ReleaseInstancePublicConnectionResponse>;
    /**
     * 查询指定云数据库SelectDB版实例的详细信息。
     */
    DescribeDBInstanceAttribute(query: DescribeDBInstanceAttributeRequest): Promise<DescribeDBInstanceAttributeResponse>;
    /**
     * 查询指定云数据库SelectDB版实例的信息。
     */
    DescribeDBInstances(query: DescribeDBInstancesRequest): Promise<DescribeDBInstancesResponse>;
    /**
     * 删除指定云数据库SelectDB版实例。
     */
    DeleteDBInstance(query: DeleteDBInstanceRequest): Promise<DeleteDBInstanceResponse>;
    /**
     * 创建一个云数据库SelectDB版实例。
     */
    CreateDBInstance(query: CreateDBInstanceRequest): Promise<CreateDBInstanceResponse>;
    /**
     * 调用该接口检查服务关联角色。
     */
    CheckServiceLinkedRole(query: CheckServiceLinkedRoleRequest): Promise<CheckServiceLinkedRoleResponse>;
    /**
     * 调用该接口创建服务关联角色。
     */
    CreateServiceLinkedRoleForSelectDB(query: CreateServiceLinkedRoleForSelectDBRequest): Promise<CreateServiceLinkedRoleForSelectDBResponse>;
    /**
     * 指定云数据库SelectDB版实例下新建集群时获取价格信息。
     */
    GetModifyBEClusterInquiry(query: GetModifyBEClusterInquiryRequest): Promise<GetModifyBEClusterInquiryResponse>;
    /**
     * 指定云数据库SelectDB版实例下新建集群时获取价格信息。
     */
    GetCreateBEClusterInquiry(query: GetCreateBEClusterInquiryRequest): Promise<GetCreateBEClusterInquiryResponse>;
    /**
     * 修改集群配置。
     */
    ModifyDBClusterConfig(query: ModifyDBClusterConfigRequest): Promise<ModifyDBClusterConfigResponse>;
    /**
     * 查看集群配置变更记录。
     */
    DescribeDBClusterConfigChangeLogs(query: DescribeDBClusterConfigChangeLogsRequest): Promise<DescribeDBClusterConfigChangeLogsResponse>;
    /**
     * 查看集群配置。
     */
    DescribeDBClusterConfig(query: DescribeDBClusterConfigRequest): Promise<DescribeDBClusterConfigResponse>;
}
export default SELECTDB;
