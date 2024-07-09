import { BatchCreatePartitionsRequest } from "./BatchCreatePartitions/req";
import { BatchCreatePartitionsResponse } from "./BatchCreatePartitions/res";
import { BatchCreateTablesRequest } from "./BatchCreateTables/req";
import { BatchCreateTablesResponse } from "./BatchCreateTables/res";
import { BatchDeleteTableVersionsRequest } from "./BatchDeleteTableVersions/req";
import { BatchDeleteTableVersionsResponse } from "./BatchDeleteTableVersions/res";
import { BatchDeletePartitionsRequest } from "./BatchDeletePartitions/req";
import { BatchDeletePartitionsResponse } from "./BatchDeletePartitions/res";
import { BatchDeleteTablesRequest } from "./BatchDeleteTables/req";
import { BatchDeleteTablesResponse } from "./BatchDeleteTables/res";
import { BatchGetPartitionColumnStatisticsRequest } from "./BatchGetPartitionColumnStatistics/req";
import { BatchGetPartitionColumnStatisticsResponse } from "./BatchGetPartitionColumnStatistics/res";
import { BatchGetPartitionsRequest } from "./BatchGetPartitions/req";
import { BatchGetPartitionsResponse } from "./BatchGetPartitions/res";
import { BatchGetTablesRequest } from "./BatchGetTables/req";
import { BatchGetTablesResponse } from "./BatchGetTables/res";
import { BatchUpdatePartitionsRequest } from "./BatchUpdatePartitions/req";
import { BatchUpdatePartitionsResponse } from "./BatchUpdatePartitions/res";
import { BatchUpdateTablesRequest } from "./BatchUpdateTables/req";
import { BatchUpdateTablesResponse } from "./BatchUpdateTables/res";
import { CreateDatabaseRequest } from "./CreateDatabase/req";
import { CreateDatabaseResponse } from "./CreateDatabase/res";
import { CreateFunctionRequest } from "./CreateFunction/req";
import { CreateFunctionResponse } from "./CreateFunction/res";
import { CreatePartitionRequest } from "./CreatePartition/req";
import { CreatePartitionResponse } from "./CreatePartition/res";
import { CreateTableRequest } from "./CreateTable/req";
import { CreateTableResponse } from "./CreateTable/res";
import { DeleteDatabaseRequest } from "./DeleteDatabase/req";
import { DeleteDatabaseResponse } from "./DeleteDatabase/res";
import { DeleteFunctionRequest } from "./DeleteFunction/req";
import { DeleteFunctionResponse } from "./DeleteFunction/res";
import { DeletePartitionRequest } from "./DeletePartition/req";
import { DeletePartitionResponse } from "./DeletePartition/res";
import { DeletePartitionColumnStatisticsRequest } from "./DeletePartitionColumnStatistics/req";
import { DeletePartitionColumnStatisticsResponse } from "./DeletePartitionColumnStatistics/res";
import { DeleteTableRequest } from "./DeleteTable/req";
import { DeleteTableResponse } from "./DeleteTable/res";
import { DeleteTableColumnStatisticsRequest } from "./DeleteTableColumnStatistics/req";
import { DeleteTableColumnStatisticsResponse } from "./DeleteTableColumnStatistics/res";
import { DeleteTableVersionRequest } from "./DeleteTableVersion/req";
import { DeleteTableVersionResponse } from "./DeleteTableVersion/res";
import { GetDatabaseRequest } from "./GetDatabase/req";
import { GetDatabaseResponse } from "./GetDatabase/res";
import { GetFunctionRequest } from "./GetFunction/req";
import { GetFunctionResponse } from "./GetFunction/res";
import { GetPartitionRequest } from "./GetPartition/req";
import { GetPartitionResponse } from "./GetPartition/res";
import { GetPartitionColumnStatisticsRequest } from "./GetPartitionColumnStatistics/req";
import { GetPartitionColumnStatisticsResponse } from "./GetPartitionColumnStatistics/res";
import { GetRegionStatusRequest } from "./GetRegionStatus/req";
import { GetRegionStatusResponse } from "./GetRegionStatus/res";
import { GetServiceStatusRequest } from "./GetServiceStatus/req";
import { GetServiceStatusResponse } from "./GetServiceStatus/res";
import { GetTableRequest } from "./GetTable/req";
import { GetTableResponse } from "./GetTable/res";
import { GetTableColumnStatisticsRequest } from "./GetTableColumnStatistics/req";
import { GetTableColumnStatisticsResponse } from "./GetTableColumnStatistics/res";
import { GetTableVersionRequest } from "./GetTableVersion/req";
import { GetTableVersionResponse } from "./GetTableVersion/res";
import { ListCatalogsRequest } from "./ListCatalogs/req";
import { ListCatalogsResponse } from "./ListCatalogs/res";
import { ListDatabasesRequest } from "./ListDatabases/req";
import { ListDatabasesResponse } from "./ListDatabases/res";
import { ListFunctionNamesRequest } from "./ListFunctionNames/req";
import { ListFunctionNamesResponse } from "./ListFunctionNames/res";
import { ListFunctionsRequest } from "./ListFunctions/req";
import { ListFunctionsResponse } from "./ListFunctions/res";
import { ListPartitionNamesRequest } from "./ListPartitionNames/req";
import { ListPartitionNamesResponse } from "./ListPartitionNames/res";
import { ListPartitionsRequest } from "./ListPartitions/req";
import { ListPartitionsResponse } from "./ListPartitions/res";
import { ListPartitionsByExprRequest } from "./ListPartitionsByExpr/req";
import { ListPartitionsByExprResponse } from "./ListPartitionsByExpr/res";
import { ListPartitionsByFilterRequest } from "./ListPartitionsByFilter/req";
import { ListPartitionsByFilterResponse } from "./ListPartitionsByFilter/res";
import { ListTableNamesRequest } from "./ListTableNames/req";
import { ListTableNamesResponse } from "./ListTableNames/res";
import { ListTableVersionsRequest } from "./ListTableVersions/req";
import { ListTableVersionsResponse } from "./ListTableVersions/res";
import { ListTablesRequest } from "./ListTables/req";
import { ListTablesResponse } from "./ListTables/res";
import { RenamePartitionRequest } from "./RenamePartition/req";
import { RenamePartitionResponse } from "./RenamePartition/res";
import { RenameTableRequest } from "./RenameTable/req";
import { RenameTableResponse } from "./RenameTable/res";
import { UpdateDatabaseRequest } from "./UpdateDatabase/req";
import { UpdateDatabaseResponse } from "./UpdateDatabase/res";
import { UpdateFunctionRequest } from "./UpdateFunction/req";
import { UpdateFunctionResponse } from "./UpdateFunction/res";
import { UpdatePartitionColumnStatisticsRequest } from "./UpdatePartitionColumnStatistics/req";
import { UpdatePartitionColumnStatisticsResponse } from "./UpdatePartitionColumnStatistics/res";
import { UpdateTableRequest } from "./UpdateTable/req";
import { UpdateTableResponse } from "./UpdateTable/res";
import { UpdateTableColumnStatisticsRequest } from "./UpdateTableColumnStatistics/req";
import { UpdateTableColumnStatisticsResponse } from "./UpdateTableColumnStatistics/res";
import { UnLockRequest } from "./UnLock/req";
import { UnLockResponse } from "./UnLock/res";
import { CreateLockRequest } from "./CreateLock/req";
import { CreateLockResponse } from "./CreateLock/res";
import { GetLockRequest } from "./GetLock/req";
import { GetLockResponse } from "./GetLock/res";
import { RefreshLockRequest } from "./RefreshLock/req";
import { RefreshLockResponse } from "./RefreshLock/res";
import { AbortLockRequest } from "./AbortLock/req";
import { AbortLockResponse } from "./AbortLock/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { GetAsyncTaskStatusRequest } from "./GetAsyncTaskStatus/req";
import { GetAsyncTaskStatusResponse } from "./GetAsyncTaskStatus/res";
import { CancelQueryRequest } from "./CancelQuery/req";
import { CancelQueryResponse } from "./CancelQuery/res";
import { GetQueryResultRequest } from "./GetQueryResult/req";
import { GetQueryResultResponse } from "./GetQueryResult/res";
import { SubmitQueryRequest } from "./SubmitQuery/req";
import { SubmitQueryResponse } from "./SubmitQuery/res";
import { RunMigrationWorkflowRequest } from "./RunMigrationWorkflow/req";
import { RunMigrationWorkflowResponse } from "./RunMigrationWorkflow/res";
import { StopMigrationWorkflowRequest } from "./StopMigrationWorkflow/req";
import { StopMigrationWorkflowResponse } from "./StopMigrationWorkflow/res";
import { SearchRequest } from "./Search/req";
import { SearchResponse } from "./Search/res";
import { GetTableProfileRequest } from "./GetTableProfile/req";
import { GetTableProfileResponse } from "./GetTableProfile/res";
import { CheckPermissionsRequest } from "./CheckPermissions/req";
import { CheckPermissionsResponse } from "./CheckPermissions/res";
import { UpdateRoleUsersRequest } from "./UpdateRoleUsers/req";
import { UpdateRoleUsersResponse } from "./UpdateRoleUsers/res";
import { ListRolesRequest } from "./ListRoles/req";
import { ListRolesResponse } from "./ListRoles/res";
import { GetCatalogSettingsRequest } from "./GetCatalogSettings/req";
import { GetCatalogSettingsResponse } from "./GetCatalogSettings/res";
import { ListRoleUsersRequest } from "./ListRoleUsers/req";
import { ListRoleUsersResponse } from "./ListRoleUsers/res";
import { RevokeRoleFromUsersRequest } from "./RevokeRoleFromUsers/req";
import { RevokeRoleFromUsersResponse } from "./RevokeRoleFromUsers/res";
import { RevokeRolesFromUserRequest } from "./RevokeRolesFromUser/req";
import { RevokeRolesFromUserResponse } from "./RevokeRolesFromUser/res";
import { RevokePermissionsRequest } from "./RevokePermissions/req";
import { RevokePermissionsResponse } from "./RevokePermissions/res";
import { GetRoleRequest } from "./GetRole/req";
import { GetRoleResponse } from "./GetRole/res";
import { ListPermissionsRequest } from "./ListPermissions/req";
import { ListPermissionsResponse } from "./ListPermissions/res";
import { GrantRolesToUserRequest } from "./GrantRolesToUser/req";
import { GrantRolesToUserResponse } from "./GrantRolesToUser/res";
import { BatchRevokePermissionsRequest } from "./BatchRevokePermissions/req";
import { BatchRevokePermissionsResponse } from "./BatchRevokePermissions/res";
import { BatchGrantPermissionsRequest } from "./BatchGrantPermissions/req";
import { BatchGrantPermissionsResponse } from "./BatchGrantPermissions/res";
import { UpdateRoleRequest } from "./UpdateRole/req";
import { UpdateRoleResponse } from "./UpdateRole/res";
import { ListUserRolesRequest } from "./ListUserRoles/req";
import { ListUserRolesResponse } from "./ListUserRoles/res";
import { CreateRoleRequest } from "./CreateRole/req";
import { CreateRoleResponse } from "./CreateRole/res";
import { GrantRoleToUsersRequest } from "./GrantRoleToUsers/req";
import { GrantRoleToUsersResponse } from "./GrantRoleToUsers/res";
import { UpdatePermissionsRequest } from "./UpdatePermissions/req";
import { UpdatePermissionsResponse } from "./UpdatePermissions/res";
import { GrantPermissionsRequest } from "./GrantPermissions/req";
import { GrantPermissionsResponse } from "./GrantPermissions/res";
import { UpdateCatalogSettingsRequest } from "./UpdateCatalogSettings/req";
import { UpdateCatalogSettingsResponse } from "./UpdateCatalogSettings/res";
import { DeleteRoleRequest } from "./DeleteRole/req";
import { DeleteRoleResponse } from "./DeleteRole/res";
import { GetDatabaseProfileRequest } from "./GetDatabaseProfile/req";
import { GetDatabaseProfileResponse } from "./GetDatabaseProfile/res";
import { GetLifecycleRuleRequest } from "./GetLifecycleRule/req";
import { GetLifecycleRuleResponse } from "./GetLifecycleRule/res";
import { ListPartitionsProfileRequest } from "./ListPartitionsProfile/req";
import { ListPartitionsProfileResponse } from "./ListPartitionsProfile/res";
import { DeleteCatalogRequest } from "./DeleteCatalog/req";
import { DeleteCatalogResponse } from "./DeleteCatalog/res";
import { CreateCatalogRequest } from "./CreateCatalog/req";
import { CreateCatalogResponse } from "./CreateCatalog/res";
import { GetCatalogRequest } from "./GetCatalog/req";
import { GetCatalogResponse } from "./GetCatalog/res";
import { UpdateCatalogRequest } from "./UpdateCatalog/req";
import { UpdateCatalogResponse } from "./UpdateCatalog/res";
import { SearchAcrossCatalogRequest } from "./SearchAcrossCatalog/req";
import { SearchAcrossCatalogResponse } from "./SearchAcrossCatalog/res";
import { RegisterLocationRequest } from "./RegisterLocation/req";
import { RegisterLocationResponse } from "./RegisterLocation/res";
import { DeregisterLocationRequest } from "./DeregisterLocation/req";
import { DeregisterLocationResponse } from "./DeregisterLocation/res";
import { UpdateRegisteredLocationRequest } from "./UpdateRegisteredLocation/req";
import { UpdateRegisteredLocationResponse } from "./UpdateRegisteredLocation/res";

interface DATALAKE {
    /**
     * 为数据湖的元数据表，批量新增多个分区。
     */
    BatchCreatePartitions(query: BatchCreatePartitionsRequest): Promise<BatchCreatePartitionsResponse>;
    /**
     * 批量新增数据湖的元数据表。
     */
    BatchCreateTables(query: BatchCreateTablesRequest): Promise<BatchCreateTablesResponse>;
    /**
     * 批量删除数据湖元数据表指定版本。
     */
    BatchDeleteTableVersions(query: BatchDeleteTableVersionsRequest): Promise<BatchDeleteTableVersionsResponse>;
    /**
     * 批量删除数据湖元数据表的指定分区。
     */
    BatchDeletePartitions(query: BatchDeletePartitionsRequest): Promise<BatchDeletePartitionsResponse>;
    /**
     * 根据名称批量删除数据湖的元数据表。
     */
    BatchDeleteTables(query: BatchDeleteTablesRequest): Promise<BatchDeleteTablesResponse>;
    /**
     * 批量获取数据湖元数据表分区的字段统计信息。
     */
    BatchGetPartitionColumnStatistics(query: BatchGetPartitionColumnStatisticsRequest): Promise<BatchGetPartitionColumnStatisticsResponse>;
    /**
     * 批量获取数据湖元数据库分区详情。
     */
    BatchGetPartitions(query: BatchGetPartitionsRequest): Promise<BatchGetPartitionsResponse>;
    /**
     * 批量获取某个数据湖元数据表的详细信息。
     */
    BatchGetTables(query: BatchGetTablesRequest): Promise<BatchGetTablesResponse>;
    /**
     * 为数据湖的元数据表，批量更新多个分区。
     */
    BatchUpdatePartitions(query: BatchUpdatePartitionsRequest): Promise<BatchUpdatePartitionsResponse>;
    /**
     * 批量更新数据湖元数据表详细信息。
     */
    BatchUpdateTables(query: BatchUpdateTablesRequest): Promise<BatchUpdateTablesResponse>;
    /**
     * 在数据湖元数据中创建一个新的元数据库。
     */
    CreateDatabase(query: CreateDatabaseRequest): Promise<CreateDatabaseResponse>;
    /**
     * 新增数据湖元数据库的用户自定义函数。
     */
    CreateFunction(query: CreateFunctionRequest): Promise<CreateFunctionResponse>;
    /**
     * 为数据湖的元数据表，新增一个分区。
     */
    CreatePartition(query: CreatePartitionRequest): Promise<CreatePartitionResponse>;
    /**
     * 新增数据湖的元数据表。
     */
    CreateTable(query: CreateTableRequest): Promise<CreateTableResponse>;
    /**
     * 根据名称删除数据湖元数据库。
     */
    DeleteDatabase(query: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse>;
    /**
     * 根据名称删除数据湖元数据库的用户自定义函数。
     */
    DeleteFunction(query: DeleteFunctionRequest): Promise<DeleteFunctionResponse>;
    /**
     * 删除数据湖元数据表的指定分区。
     */
    DeletePartition(query: DeletePartitionRequest): Promise<DeletePartitionResponse>;
    /**
     * 回收数据湖元数据表分区的字段统计信息。
     */
    DeletePartitionColumnStatistics(query: DeletePartitionColumnStatisticsRequest): Promise<DeletePartitionColumnStatisticsResponse>;
    /**
     * 根据名称删除数据湖的元数据表。
     */
    DeleteTable(query: DeleteTableRequest): Promise<DeleteTableResponse>;
    /**
     * 回收数据湖元数据表的字段统计信息。
     */
    DeleteTableColumnStatistics(query: DeleteTableColumnStatisticsRequest): Promise<DeleteTableColumnStatisticsResponse>;
    /**
     * 删除数据湖元数据表指定版本。
     */
    DeleteTableVersion(query: DeleteTableVersionRequest): Promise<DeleteTableVersionResponse>;
    /**
     * 获取数据湖具体的一个元数据库的详细信息。
     */
    GetDatabase(query: GetDatabaseRequest): Promise<GetDatabaseResponse>;
    /**
     * 根据函数名称，获取数据湖元数据库的用户自定义函数。
     */
    GetFunction(query: GetFunctionRequest): Promise<GetFunctionResponse>;
    /**
     * 获取数据湖元数据库分区详情。
     */
    GetPartition(query: GetPartitionRequest): Promise<GetPartitionResponse>;
    /**
     * 获取数据湖元数据分区指定字段的统计信息。
     */
    GetPartitionColumnStatistics(query: GetPartitionColumnStatisticsRequest): Promise<GetPartitionColumnStatisticsResponse>;
    /**
     * 获取数据湖构建指定地域的服务开通状态。
     */
    GetRegionStatus(query: GetRegionStatusRequest): Promise<GetRegionStatusResponse>;
    /**
     * 获取数据湖构建某个用户的服务开通状态。
     */
    GetServiceStatus(query: GetServiceStatusRequest): Promise<GetServiceStatusResponse>;
    /**
     * 获取某个数据湖元数据表的详细信息。
     */
    GetTable(query: GetTableRequest): Promise<GetTableResponse>;
    /**
     * 获取数据湖元数据表指定字段的统计信息。
     */
    GetTableColumnStatistics(query: GetTableColumnStatisticsRequest): Promise<GetTableColumnStatisticsResponse>;
    /**
     * 获取数据湖元数据表的一个指定版本。
     */
    GetTableVersion(query: GetTableVersionRequest): Promise<GetTableVersionResponse>;
    /**
     * 分页查询，获取元数据库命名空间（Catalog）列表。
     */
    ListCatalogs(query: ListCatalogsRequest): Promise<ListCatalogsResponse>;
    /**
     * 获取数据湖元数据库列表，分页查询，可以根据数据库名称匹配。
     */
    ListDatabases(query: ListDatabasesRequest): Promise<ListDatabasesResponse>;
    /**
     * 分页查询，获取元数据库的函数名称列表。
     */
    ListFunctionNames(query: ListFunctionNamesRequest): Promise<ListFunctionNamesResponse>;
    /**
     * 批量获取数据湖元数据库的用户自定义函数列表。
     */
    ListFunctions(query: ListFunctionsRequest): Promise<ListFunctionsResponse>;
    /**
     * 获取数据湖元数据表分区名称列表，通常用于多级分区。
     */
    ListPartitionNames(query: ListPartitionNamesRequest): Promise<ListPartitionNamesResponse>;
    /**
     * 获取数据湖元数据库分区详情列表。
     */
    ListPartitions(query: ListPartitionsRequest): Promise<ListPartitionsResponse>;
    ListPartitionsByExpr(query: ListPartitionsByExprRequest): Promise<ListPartitionsByExprResponse>;
    /**
     * 获取数据湖元数据表分区列表，按Filter条件查询。
     */
    ListPartitionsByFilter(query: ListPartitionsByFilterRequest): Promise<ListPartitionsByFilterResponse>;
    /**
     * 仅用于查询数据湖元数据表的名称列表。
     */
    ListTableNames(query: ListTableNamesRequest): Promise<ListTableNamesResponse>;
    /**
     * 分页查询数据湖元数据表指定版本的列表。
     */
    ListTableVersions(query: ListTableVersionsRequest): Promise<ListTableVersionsResponse>;
    /**
     * 获取数据湖元数据表列表。
     */
    ListTables(query: ListTablesRequest): Promise<ListTablesResponse>;
    /**
     * 更新数据湖元数据表的分区名称。
     */
    RenamePartition(query: RenamePartitionRequest): Promise<RenamePartitionResponse>;
    /**
     * 仅用于更新数据湖元数据表的名称。
     */
    RenameTable(query: RenameTableRequest): Promise<RenameTableResponse>;
    /**
     * 更新数据湖元数据库的详细信息。
     */
    UpdateDatabase(query: UpdateDatabaseRequest): Promise<UpdateDatabaseResponse>;
    /**
     * 根据名称，更新数据湖元数据库的用户自定义函数信息。
     */
    UpdateFunction(query: UpdateFunctionRequest): Promise<UpdateFunctionResponse>;
    /**
     * 创建或者更新元数据表分区的字段统计信息。
     */
    UpdatePartitionColumnStatistics(query: UpdatePartitionColumnStatisticsRequest): Promise<UpdatePartitionColumnStatisticsResponse>;
    /**
     * 根据名称更新数据湖元数据表信息。
     */
    UpdateTable(query: UpdateTableRequest): Promise<UpdateTableResponse>;
    /**
     * 创建或者更新元数据表的字段统计信息。
     */
    UpdateTableColumnStatistics(query: UpdateTableColumnStatisticsRequest): Promise<UpdateTableColumnStatisticsResponse>;
    /**
     * 解开指定的元数据锁。
     */
    UnLock(query: UnLockRequest): Promise<UnLockResponse>;
    /**
     * 创建一个指定的元数据锁。
     */
    CreateLock(query: CreateLockRequest): Promise<CreateLockResponse>;
    /**
     * 查询指定的元数据锁。
     */
    GetLock(query: GetLockRequest): Promise<GetLockResponse>;
    /**
     * 刷新指定的元数据锁。
     */
    RefreshLock(query: RefreshLockRequest): Promise<RefreshLockResponse>;
    /**
     * 中止指定的元数据锁。
     */
    AbortLock(query: AbortLockRequest): Promise<AbortLockResponse>;
    /**
     * 获取开通的地区列表。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 用于元数据相关异步API中，检查异步执行任务的状态。
     */
    GetAsyncTaskStatus(query: GetAsyncTaskStatusRequest): Promise<GetAsyncTaskStatusResponse>;
    /**
     * 取消查询任务。
     */
    CancelQuery(query: CancelQueryRequest): Promise<CancelQueryResponse>;
    /**
     * 获取数据探索查询结果。
     */
    GetQueryResult(query: GetQueryResultRequest): Promise<GetQueryResultResponse>;
    /**
     * 提交SQL查询任务。
     */
    SubmitQuery(query: SubmitQueryRequest): Promise<SubmitQueryResponse>;
    /**
     * 运行元数据迁移任务
     */
    RunMigrationWorkflow(query: RunMigrationWorkflowRequest): Promise<RunMigrationWorkflowResponse>;
    /**
     * 停止元数据迁移任务。
     */
    StopMigrationWorkflow(query: StopMigrationWorkflowRequest): Promise<StopMigrationWorkflowResponse>;
    /**
     * 元数据检索。
     */
    Search(query: SearchRequest): Promise<SearchResponse>;
    /**
     * 获取表数据概况的详细信息。
     */
    GetTableProfile(query: GetTableProfileRequest): Promise<GetTableProfileResponse>;
    /**
     * 对User权限进行校验。
     */
    CheckPermissions(query: CheckPermissionsRequest): Promise<CheckPermissionsResponse>;
    /**
     * 更新角色中的user，该user包含ram user/ram role。
     */
    UpdateRoleUsers(query: UpdateRoleUsersRequest): Promise<UpdateRoleUsersResponse>;
    /**
     * 获取数据湖角色列表。
     */
    ListRoles(query: ListRolesRequest): Promise<ListRolesResponse>;
    /**
     * 获取数据湖Catalog的配置，需admin角色以上角色。
     */
    GetCatalogSettings(query: GetCatalogSettingsRequest): Promise<GetCatalogSettingsResponse>;
    /**
     * 获取单个角色的User列表。
     */
    ListRoleUsers(query: ListRoleUsersRequest): Promise<ListRoleUsersResponse>;
    /**
     * 将多个User从单个数据湖角色中移除。
     */
    RevokeRoleFromUsers(query: RevokeRoleFromUsersRequest): Promise<RevokeRoleFromUsersResponse>;
    /**
     * 将多个角色从单个User中移除。
     */
    RevokeRolesFromUser(query: RevokeRolesFromUserRequest): Promise<RevokeRolesFromUserResponse>;
    /**
     * 取消对User/数据湖角色授予资源的操作权限。
     */
    RevokePermissions(query: RevokePermissionsRequest): Promise<RevokePermissionsResponse>;
    /**
     * 根据角色名获取数据湖权限中的角色。
     */
    GetRole(query: GetRoleRequest): Promise<GetRoleResponse>;
    /**
     * 获取权限列表。
     */
    ListPermissions(query: ListPermissionsRequest): Promise<ListPermissionsResponse>;
    /**
     * 将多个角色授予给单个用户。
     */
    GrantRolesToUser(query: GrantRolesToUserRequest): Promise<GrantRolesToUserResponse>;
    /**
     * 批量取消对User/数据湖角色授予资源的操作权限
     * 。
     */
    BatchRevokePermissions(query: BatchRevokePermissionsRequest): Promise<BatchRevokePermissionsResponse>;
    /**
     * 批量对User/数据湖角色授予资源的操作权限。
     */
    BatchGrantPermissions(query: BatchGrantPermissionsRequest): Promise<BatchGrantPermissionsResponse>;
    /**
     * 更新数据湖权限中的角色
     * 。
     */
    UpdateRole(query: UpdateRoleRequest): Promise<UpdateRoleResponse>;
    /**
     * 获取单个User的数据湖角色列表。
     */
    ListUserRoles(query: ListUserRolesRequest): Promise<ListUserRolesResponse>;
    /**
     * 在数据湖权限中新增一个角色。
     */
    CreateRole(query: CreateRoleRequest): Promise<CreateRoleResponse>;
    /**
     * 将数据湖角色授予多个用户。
     */
    GrantRoleToUsers(query: GrantRoleToUsersRequest): Promise<GrantRoleToUsersResponse>;
    /**
     * 对User/数据湖角色的权限进行更新。
     */
    UpdatePermissions(query: UpdatePermissionsRequest): Promise<UpdatePermissionsResponse>;
    /**
     * 对User/数据湖角色授予资源的操作权限。
     */
    GrantPermissions(query: GrantPermissionsRequest): Promise<GrantPermissionsResponse>;
    /**
     * 更新数据湖Catalog的配置，需admin角色以上角色。
     */
    UpdateCatalogSettings(query: UpdateCatalogSettingsRequest): Promise<UpdateCatalogSettingsResponse>;
    /**
     * 删除数据湖权限中的角色。
     */
    DeleteRole(query: DeleteRoleRequest): Promise<DeleteRoleResponse>;
    /**
     * 获取库数据概况的详细信息。
     */
    GetDatabaseProfile(query: GetDatabaseProfileRequest): Promise<GetDatabaseProfileResponse>;
    /**
     * 获取库表生命周期规则。
     */
    GetLifecycleRule(query: GetLifecycleRuleRequest): Promise<GetLifecycleRuleResponse>;
    /**
     * 获取分区数据概况的详细信息。
     */
    ListPartitionsProfile(query: ListPartitionsProfileRequest): Promise<ListPartitionsProfileResponse>;
    /**
     * 删除数据目录。
     */
    DeleteCatalog(query: DeleteCatalogRequest): Promise<DeleteCatalogResponse>;
    /**
     * 创建数据湖数据目录。
     */
    CreateCatalog(query: CreateCatalogRequest): Promise<CreateCatalogResponse>;
    /**
     * 获取数据目录详情。
     */
    GetCatalog(query: GetCatalogRequest): Promise<GetCatalogResponse>;
    /**
     * 更新数据目录内容。
     */
    UpdateCatalog(query: UpdateCatalogRequest): Promise<UpdateCatalogResponse>;
    /**
     * 跨Catalog搜索库、表、字段等内容。
     */
    SearchAcrossCatalog(query: SearchAcrossCatalogRequest): Promise<SearchAcrossCatalogResponse>;
    /**
     * 将OSS路径注册为由DLF管理。
     */
    RegisterLocation(query: RegisterLocationRequest): Promise<RegisterLocationResponse>;
    /**
     * 取消Location注册。
     */
    DeregisterLocation(query: DeregisterLocationRequest): Promise<DeregisterLocationResponse>;
    /**
     * 编辑已注册的Location。
     */
    UpdateRegisteredLocation(query: UpdateRegisteredLocationRequest): Promise<UpdateRegisteredLocationResponse>;
}
export default DATALAKE;
