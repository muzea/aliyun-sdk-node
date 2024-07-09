import { AllocateVirtualWareHousePublicConnectionRequest } from "./AllocateVirtualWareHousePublicConnection/req";
import { AllocateVirtualWareHousePublicConnectionResponse } from "./AllocateVirtualWareHousePublicConnection/res";
import { CheckCreateClusterRequest } from "./CheckCreateCluster/req";
import { CheckCreateClusterResponse } from "./CheckCreateCluster/res";
import { CheckCreateVirtualWareHouseRequest } from "./CheckCreateVirtualWareHouse/req";
import { CheckCreateVirtualWareHouseResponse } from "./CheckCreateVirtualWareHouse/res";
import { CheckDeleteVirtualWareHouseRequest } from "./CheckDeleteVirtualWareHouse/req";
import { CheckDeleteVirtualWareHouseResponse } from "./CheckDeleteVirtualWareHouse/res";
import { CheckModifyVirtualWareHouseResourceRequest } from "./CheckModifyVirtualWareHouseResource/req";
import { CheckModifyVirtualWareHouseResourceResponse } from "./CheckModifyVirtualWareHouseResource/res";
import { CreateAccountRequest } from "./CreateAccount/req";
import { CreateAccountResponse } from "./CreateAccount/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { CreateVirtualWareHouseRequest } from "./CreateVirtualWareHouse/req";
import { CreateVirtualWareHouseResponse } from "./CreateVirtualWareHouse/res";
import { DeleteAccountRequest } from "./DeleteAccount/req";
import { DeleteAccountResponse } from "./DeleteAccount/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { DeleteClusterSecurityIPGroupRequest } from "./DeleteClusterSecurityIPGroup/req";
import { DeleteClusterSecurityIPGroupResponse } from "./DeleteClusterSecurityIPGroup/res";
import { DeleteVirtualWareHouseRequest } from "./DeleteVirtualWareHouse/req";
import { DeleteVirtualWareHouseResponse } from "./DeleteVirtualWareHouse/res";
import { DescribeAccountRequest } from "./DescribeAccount/req";
import { DescribeAccountResponse } from "./DescribeAccount/res";
import { DescribeClusterRequest } from "./DescribeCluster/req";
import { DescribeClusterResponse } from "./DescribeCluster/res";
import { DescribeClusterSecurityInfoRequest } from "./DescribeClusterSecurityInfo/req";
import { DescribeClusterSecurityInfoResponse } from "./DescribeClusterSecurityInfo/res";
import { DescribeClusterStatusSetRequest } from "./DescribeClusterStatusSet/req";
import { DescribeClusterStatusSetResponse } from "./DescribeClusterStatusSet/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeRunningQueryRequest } from "./DescribeRunningQuery/req";
import { DescribeRunningQueryResponse } from "./DescribeRunningQuery/res";
import { DescribeSlowQueryRequest } from "./DescribeSlowQuery/req";
import { DescribeSlowQueryResponse } from "./DescribeSlowQuery/res";
import { DescribeSlowQueryTrendRequest } from "./DescribeSlowQueryTrend/req";
import { DescribeSlowQueryTrendResponse } from "./DescribeSlowQueryTrend/res";
import { DescribeVirtualWareHouseRequest } from "./DescribeVirtualWareHouse/req";
import { DescribeVirtualWareHouseResponse } from "./DescribeVirtualWareHouse/res";
import { DescribeVirtualWareHouseClassSetRequest } from "./DescribeVirtualWareHouseClassSet/req";
import { DescribeVirtualWareHouseClassSetResponse } from "./DescribeVirtualWareHouseClassSet/res";
import { DescribeVirtualWareHouseEndpointInfoRequest } from "./DescribeVirtualWareHouseEndpointInfo/req";
import { DescribeVirtualWareHouseEndpointInfoResponse } from "./DescribeVirtualWareHouseEndpointInfo/res";
import { DescribeVirtualWareHouseStatusSetRequest } from "./DescribeVirtualWareHouseStatusSet/req";
import { DescribeVirtualWareHouseStatusSetResponse } from "./DescribeVirtualWareHouseStatusSet/res";
import { GetDistributedTablesBufferSizeRequest } from "./GetDistributedTablesBufferSize/req";
import { GetDistributedTablesBufferSizeResponse } from "./GetDistributedTablesBufferSize/res";
import { KillQueryRequest } from "./KillQuery/req";
import { KillQueryResponse } from "./KillQuery/res";
import { ListAccountsRequest } from "./ListAccounts/req";
import { ListAccountsResponse } from "./ListAccounts/res";
import { ListClustersRequest } from "./ListClusters/req";
import { ListClustersResponse } from "./ListClusters/res";
import { ListVirtualWareHouseConfigsRequest } from "./ListVirtualWareHouseConfigs/req";
import { ListVirtualWareHouseConfigsResponse } from "./ListVirtualWareHouseConfigs/res";
import { ListVirtualWareHousesRequest } from "./ListVirtualWareHouses/req";
import { ListVirtualWareHousesResponse } from "./ListVirtualWareHouses/res";
import { ModifyAccountDescriptionRequest } from "./ModifyAccountDescription/req";
import { ModifyAccountDescriptionResponse } from "./ModifyAccountDescription/res";
import { ModifyAccountPrivilegeRequest } from "./ModifyAccountPrivilege/req";
import { ModifyAccountPrivilegeResponse } from "./ModifyAccountPrivilege/res";
import { ModifyClusterDescriptionRequest } from "./ModifyClusterDescription/req";
import { ModifyClusterDescriptionResponse } from "./ModifyClusterDescription/res";
import { ModifyVirtualWareHouseConfigRequest } from "./ModifyVirtualWareHouseConfig/req";
import { ModifyVirtualWareHouseConfigResponse } from "./ModifyVirtualWareHouseConfig/res";
import { ModifyVirtualWareHouseDescriptionRequest } from "./ModifyVirtualWareHouseDescription/req";
import { ModifyVirtualWareHouseDescriptionResponse } from "./ModifyVirtualWareHouseDescription/res";
import { ModifyVirtualWareHouseResourceRequest } from "./ModifyVirtualWareHouseResource/req";
import { ModifyVirtualWareHouseResourceResponse } from "./ModifyVirtualWareHouseResource/res";
import { PatchClusterSecurityIPGroupRequest } from "./PatchClusterSecurityIPGroup/req";
import { PatchClusterSecurityIPGroupResponse } from "./PatchClusterSecurityIPGroup/res";
import { ReleaseVirtualWareHousePublicConnectionRequest } from "./ReleaseVirtualWareHousePublicConnection/req";
import { ReleaseVirtualWareHousePublicConnectionResponse } from "./ReleaseVirtualWareHousePublicConnection/res";
import { ResetAccountPasswordRequest } from "./ResetAccountPassword/req";
import { ResetAccountPasswordResponse } from "./ResetAccountPassword/res";
import { RestartVirtualWareHouseRequest } from "./RestartVirtualWareHouse/req";
import { RestartVirtualWareHouseResponse } from "./RestartVirtualWareHouse/res";
import { UpgradeClusterRequest } from "./UpgradeCluster/req";
import { UpgradeClusterResponse } from "./UpgradeCluster/res";
import { UpsertClusterSecurityIPGroupRequest } from "./UpsertClusterSecurityIPGroup/req";
import { UpsertClusterSecurityIPGroupResponse } from "./UpsertClusterSecurityIPGroup/res";

interface CLICKHOUSE {
    /**
     * 调用AllocateVirtualWareHousePublicConnection接口申请云原生版集群指定计算组的外网地址。
     */
    AllocateVirtualWareHousePublicConnection(query: AllocateVirtualWareHousePublicConnectionRequest): Promise<AllocateVirtualWareHousePublicConnectionResponse>;
    /**
     * 调用CheckCreateCluster接口对创建云数据库ClickHouse云原生版集群进行预检查，预判创建请求是否成功。
     */
    CheckCreateCluster(query: CheckCreateClusterRequest): Promise<CheckCreateClusterResponse>;
    /**
     * 调用CheckCreateVirtualWareHouse接口对创建计算组进行预检查，预判创建请求是否成功。
     */
    CheckCreateVirtualWareHouse(query: CheckCreateVirtualWareHouseRequest): Promise<CheckCreateVirtualWareHouseResponse>;
    /**
     * 调用CheckDeleteVirtualWareHouse接口对删除计算组进行预检查，预判删除请求是否成功。
     */
    CheckDeleteVirtualWareHouse(query: CheckDeleteVirtualWareHouseRequest): Promise<CheckDeleteVirtualWareHouseResponse>;
    /**
     * 调用CheckModifyVirtualWareHouseResource接口对计算组变配进行预检查，预判变配请求是否成功。
     */
    CheckModifyVirtualWareHouseResource(query: CheckModifyVirtualWareHouseResourceRequest): Promise<CheckModifyVirtualWareHouseResourceResponse>;
    /**
     * 调用CreateAccount接口为云数据库ClickHouse云原生版集群创建数据库账号。
     */
    CreateAccount(query: CreateAccountRequest): Promise<CreateAccountResponse>;
    /**
     * 调用CreateCluster接口创建一个云数据库ClickHouse云原生版集群。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 调用CreateVirtualWareHouse接口为云数据库ClickHouse云原生版集群创建计算组。
     */
    CreateVirtualWareHouse(query: CreateVirtualWareHouseRequest): Promise<CreateVirtualWareHouseResponse>;
    /**
     * 调用DeleteAccount接口删除云数据库ClickHouse云原生版集群的指定数据库账号。
     */
    DeleteAccount(query: DeleteAccountRequest): Promise<DeleteAccountResponse>;
    /**
     * 调用DeleteCluster接口释放指定云数据库ClickHouse云原生版的按量付费集群。
     */
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 调用DeleteClusterSecurityIPGroup接口删除云数据库ClickHouse云原生版集群的指定白名单分组。
     */
    DeleteClusterSecurityIPGroup(query: DeleteClusterSecurityIPGroupRequest): Promise<DeleteClusterSecurityIPGroupResponse>;
    /**
     * 调用DeleteVirtualWareHouse接口删除云数据库ClickHouse云原生版集群的指定计算组。
     */
    DeleteVirtualWareHouse(query: DeleteVirtualWareHouseRequest): Promise<DeleteVirtualWareHouseResponse>;
    /**
     * 调用DescribeAccount接口查看云数据库ClickHouse云原生版集群的指定数据库账号信息。
     */
    DescribeAccount(query: DescribeAccountRequest): Promise<DescribeAccountResponse>;
    /**
     * 调用DescribeCluster接口查看云数据库ClickHouse云原生版集群的信息。
     */
    DescribeCluster(query: DescribeClusterRequest): Promise<DescribeClusterResponse>;
    /**
     * 调用DescribeClusterSecurityInfo接口查看云数据库ClickHouse云原生版集群的白名单分组。
     */
    DescribeClusterSecurityInfo(query: DescribeClusterSecurityInfoRequest): Promise<DescribeClusterSecurityInfoResponse>;
    /**
     * 调用DescribeClusterStatusSet接口查看云数据库ClickHouse云原生版集群的所有状态信息。
     */
    DescribeClusterStatusSet(query: DescribeClusterStatusSetRequest): Promise<DescribeClusterStatusSetResponse>;
    /**
     * 调用DescribeRegions接口查询云数据库ClickHouse云原生版的地域和可用区信息。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用DescribeRunningQuery接口对指定云数据库ClickHouse云原生版的单个计算组进行正在运行查询查看操作。
     */
    DescribeRunningQuery(query: DescribeRunningQueryRequest): Promise<DescribeRunningQueryResponse>;
    /**
     * 调用DescribeSlowQuery接口对指定云数据库ClickHouse云原生版的单个计算组进行慢查询明细诊断操作。
     */
    DescribeSlowQuery(query: DescribeSlowQueryRequest): Promise<DescribeSlowQueryResponse>;
    /**
     * 调用DescribeSlowQueryTrend接口对指定云数据库ClickHouse云原生版的单个计算组进行慢查询趋势诊断操作。
     */
    DescribeSlowQueryTrend(query: DescribeSlowQueryTrendRequest): Promise<DescribeSlowQueryTrendResponse>;
    /**
     * 调用DescribeVirtualWareHouse接口查看云数据库ClickHouse云原生版集群的指定计算组信息。
     */
    DescribeVirtualWareHouse(query: DescribeVirtualWareHouseRequest): Promise<DescribeVirtualWareHouseResponse>;
    /**
     * 调用DescribeVirtualWareHouseClassSet接口查询云数据库ClickHouse云原生版支持的所有计算组规格。
     */
    DescribeVirtualWareHouseClassSet(query: DescribeVirtualWareHouseClassSetRequest): Promise<DescribeVirtualWareHouseClassSetResponse>;
    /**
     * 调用DescribeVirtualWareHouseEndpointInfo接口查看计算组的连接信息。
     */
    DescribeVirtualWareHouseEndpointInfo(query: DescribeVirtualWareHouseEndpointInfoRequest): Promise<DescribeVirtualWareHouseEndpointInfoResponse>;
    /**
     * 调用DescribeVirtualWareHouseStatusSet接口查看云原生版集群计算组的所有状态信息。
     */
    DescribeVirtualWareHouseStatusSet(query: DescribeVirtualWareHouseStatusSetRequest): Promise<DescribeVirtualWareHouseStatusSetResponse>;
    /**
     * 调用GetDistributedTablesBufferSize接口对指定云数据库ClickHouse云原生版的单个计算组进行分布式表本地写入缓存大小统计操作。
     */
    GetDistributedTablesBufferSize(query: GetDistributedTablesBufferSizeRequest): Promise<GetDistributedTablesBufferSizeResponse>;
    /**
     * 调用KillQuery接口对指定云数据库ClickHouse云原生版的单个计算组进行查询取消操作。
     */
    KillQuery(query: KillQueryRequest): Promise<KillQueryResponse>;
    /**
     * 调用ListAccounts接口查看云数据库ClickHouse云原生版集群的所有数据库账号信息。
     */
    ListAccounts(query: ListAccountsRequest): Promise<ListAccountsResponse>;
    /**
     * 调用ListClusters接口查看指定地域的云数据库ClickHouse云原生版集群信息。
     */
    ListClusters(query: ListClustersRequest): Promise<ListClustersResponse>;
    /**
     * 调用ListVirtualWareHouseConfigs接口查看云数据库ClickHouse云原生版集群指定计算组的所有参数配置信息。
     */
    ListVirtualWareHouseConfigs(query: ListVirtualWareHouseConfigsRequest): Promise<ListVirtualWareHouseConfigsResponse>;
    /**
     * 调用ListVirtualWareHouses接口查看云数据库ClickHouse云原生版集群的所有计算组信息。
     */
    ListVirtualWareHouses(query: ListVirtualWareHousesRequest): Promise<ListVirtualWareHousesResponse>;
    /**
     * 调用ModifyAccountDescription接口修改云数据库ClickHouse云原生版集群指定数据库账号的描述。
     */
    ModifyAccountDescription(query: ModifyAccountDescriptionRequest): Promise<ModifyAccountDescriptionResponse>;
    /**
     * 调用ModifyAccountPrivilege接口修改云数据库ClickHouse云原生版集群指定数据库账号的权限类型。
     */
    ModifyAccountPrivilege(query: ModifyAccountPrivilegeRequest): Promise<ModifyAccountPrivilegeResponse>;
    /**
     * 调用ModifyClusterDescription接口修改云数据库ClickHouse云原生版集群的描述。
     */
    ModifyClusterDescription(query: ModifyClusterDescriptionRequest): Promise<ModifyClusterDescriptionResponse>;
    /**
     * 调用ModifyVirtualWareHouseConfig接口修改云原生版集群指定计算组的参数配置信息。
     */
    ModifyVirtualWareHouseConfig(query: ModifyVirtualWareHouseConfigRequest): Promise<ModifyVirtualWareHouseConfigResponse>;
    /**
     * 调用ModifyVirtualWareHouseDescription接口修改云数据库ClickHouse云原生版集群指定计算组的描述。
     */
    ModifyVirtualWareHouseDescription(query: ModifyVirtualWareHouseDescriptionRequest): Promise<ModifyVirtualWareHouseDescriptionResponse>;
    /**
     * 调用ModifyVirtualWareHouseResource接口对云数据库ClickHouse云原生版集群的指定计算组变配。
     */
    ModifyVirtualWareHouseResource(query: ModifyVirtualWareHouseResourceRequest): Promise<ModifyVirtualWareHouseResourceResponse>;
    /**
     * 调用PatchClusterSecurityIPGroup接口在白名单分组中添加IP地址。本接口仅适用于云数据库ClickHouse的云原生版集群。
     */
    PatchClusterSecurityIPGroup(query: PatchClusterSecurityIPGroupRequest): Promise<PatchClusterSecurityIPGroupResponse>;
    /**
     * 调用ReleaseVirtualWareHousePublicConnection接口释放云数据库ClickHouse云原生版集群指定计算组的外网地址。
     */
    ReleaseVirtualWareHousePublicConnection(query: ReleaseVirtualWareHousePublicConnectionRequest): Promise<ReleaseVirtualWareHousePublicConnectionResponse>;
    /**
     * 调用ResetAccountPassword接口重置数据库账号的密码。本接口仅适用于云数据库ClickHouse的云原生版集群。
     */
    ResetAccountPassword(query: ResetAccountPasswordRequest): Promise<ResetAccountPasswordResponse>;
    /**
     * 调用RestartVirtualWareHouse接口重启计算组。本接口仅适用于云数据库ClickHouse的云原生版集群。
     */
    RestartVirtualWareHouse(query: RestartVirtualWareHouseRequest): Promise<RestartVirtualWareHouseResponse>;
    /**
     * 调用UpgradeCluster接口为云数据库ClickHouse云原生版集群进行小版本升级，主要包含bug修复。
     */
    UpgradeCluster(query: UpgradeClusterRequest): Promise<UpgradeClusterResponse>;
    /**
     * 调用UpsertClusterSecurityIPGroup接口重置白名单分组中的IP地址。本接口仅适用于云数据库ClickHouse的云原生版集群。
     */
    UpsertClusterSecurityIPGroup(query: UpsertClusterSecurityIPGroupRequest): Promise<UpsertClusterSecurityIPGroupResponse>;
}
export default CLICKHOUSE;
