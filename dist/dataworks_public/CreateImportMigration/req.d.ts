export interface CreateImportMigrationRequest {
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks管控台，进入工作空间配置页面获取工作空间ID。
     * @example `123456`
     */
    "ProjectId": number;
    /**
     * 创建的导入任务的名称。项目空间内该名称必须唯一。
     * @example `test_import_001`
     */
    "Name": string;
    /**
     * 导入导出包的类型，取值如下：
     * - DATAWORKS_MODEL（标准格式）
     * - DATAWORKS_V2（专有云（V3.6.1-V3.11））
     * - DATAWORKS_V3（专有云（V3.12及以上））
     * @example `DATAWORKS_MODEL`
     */
    "PackageType": string;
    /**
     * 导入包文件路径。
     * **注意：本接口导入文件涉及文件上传。方式调用举例如下：**
     * ```java
     *         Config config = new Config();
     *         config.setAccessKeyId(accessId);
     *         config.setAccessKeySecret(accessKey);
     *         config.setEndpoint(popEndpoint);
     *         config.setRegionId(regionId);
     *         Client client = new Client(config);
     *         CreateImportMigrationAdvanceRequest request = new CreateImportMigrationAdvanceRequest();
     *         request.setName("test_migration_api_" + System.currentTimeMillis());
     *         request.setProjectId(123456L);
     *         request.setPackageType("DATAWORKS_MODEL");
     *         request.setPackageFileObject(new FileInputStream("/home/admin/Downloads/test.zip"));
     *         RuntimeOptions runtime = new RuntimeOptions();
     *         CreateImportMigrationResponse response = client.createImportMigrationAdvance(request, runtime);
     * ```
     * @example `/home/admin/xxx/import.zip`
     */
    "PackageFile": string;
    /**
     * 调度资源组和数据集成资源组的映射关系。映射的key和value均为资源组的标识符（identifier）， 格式如下：
     * ```json
     * {
     *     "SCHEDULER_RESOURCE_GROUP": {
     *         "xxx": "yyy"
     *     },
     *     "DI_RESOURCE_GROUP": {
     *         "ccc": "dfdd"
     *     }
     * }
     * ```
     * @example `{"SCHEDULER_RESOURCE_GROUP": {"xxx":"yyy"},"DI_RESOURCE_GROUP":{"ccc":"ddd"}}`
     */
    "ResourceGroupMap"?: string;
    /**
     * 用于在执行导入导出操作时，根据该映射关系，修改导入导出包里的输入输出项目空间名称为映射后的项目空间名称。例如，导入时会根据映射关系，把输入输出里的项目空间名称的前缀做相应替换。
     * @example `{"test_workspace_src": "test_workspace_target"}`
     */
    "WorkspaceMap"?: string;
    /**
     * 导入任务中，导入的源计算引擎到导出的目标计算引擎实例的映射关系。
     * 计算引擎的类型，包括ODPS、EMR、HADOOP_CDH、HOLOGRES等。
     * @example `{     "ODPS": {       "zxy_8221431_engine": "wzp_kaifazheban_engine"     },     "EMR": {         "aaaa": "bbb"     }   }`
     */
    "CalculateEngineMap"?: string;
    /**
     * 执行导入操作时，设定的自动提交发布任务的规则。参数如下：
     * - resourceAutoCommit：资源是否自动提交。true 表示是，false表示否。
     * - resourceAutoDeploy：资源是否自动发布。true 表示是，false表示否。
     * - functionAutoCommit：函数是否自动提交。true 表示是，false表示否。
     * - functionAutoDeploy： 函数是否自动发布。true 表示是，false表示否。
     * - tableAutoCommitToDev：表是否自动提交到开发环境。true 表示是，false表示否。
     * - tableAutoCommitToProd：表是否自动提交到生产环境。true 表示是，false表示否。
     * - ignoreLock：是否自动绕过锁定。true 表示是，false表示否。当任务被其他人编辑锁定时，如果选择绕过锁定，则可以强制更新当前任务。
     * - fileAutoCommit：文件是否自动提交，true 表示是，false表示否。
     * - fileAutoDeploy：文件是否自动发布，true 表示是，false表示否。
     * @example `{     "resourceAutoCommit": false,     "resourceAutoDeploy": false,     "functionAutoCommit": false,     "functionAutoDeploy": false,     "tableAutoCommitToDev": false,     "tableAutoCommitToProd": false,     "ignoreLock": false,     "fileAutoCommit": false,     "fileAutoDeploy": false   }`
     */
    "CommitRule"?: string;
    /**
     * 导入导出包的描述信息。
     * @example `test description`
     */
    "Description"?: string;
}
