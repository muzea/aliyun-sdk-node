export interface GetInstanceInspectionsResponse {
    /**
     * 请求返回消息。
     * >请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 详细信息。
     */
    Data: {
        /**
         * 详细信息列表。
         */
        List: {
            /**
             * 任务结束时间，格式为Unix时间戳，单位为毫秒。
             * >任务结束时间需晚于任务开始时间。
             * @example `1608888296001`
             */
            EndTime: number;
            /**
             * 任务开始时间，格式为Unix时间戳，单位为毫秒。
             * @example `1608888296000`
             */
            StartTime: number;
            /**
             * 返回的数据。
             * @example `"data": { "hasDeadLock": false, "exceptionTableMap": {}, "bigTransactionCount": 0, "cpu": 4, "isRds": true, "rdsEnable": true, "enable": false, "activeSessions": [], "bigTransactionList": [], "bigSessionList": [ { "blockDuration": 0, "active": false, "Time": 0, "db": "" },`
             */
            Data: any;
            /**
             * 实例信息。
             */
            Instance: {
                /**
                 * 实例的VPC ID。
                 * @example `vpc-bp1knt7m55z9exoo7****`
                 */
                VpcId: string;
                /**
                 * 实例的唯一标识符号。
                 * @example `hdm_3063db6792965c080a4bcb6e6304****`
                 */
                Uuid: string;
                /**
                 * 实例所属的数据库产品，取值：
                 * - **RDS**：云实例。
                 * - **ECS**：ECS自建实例。
                 * - **IDC**：非公有云自建实例。
                 * > IDC为用户数据中心。
                 * @example `RDS`
                 */
                InstanceArea: string;
                /**
                 * 实例的规格。
                 * @example `rds.mysql.s2.xlarge`
                 */
                InstanceClass: string;
                /**
                 * 实例所属的地域ID。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 账号ID，您可在阿里云**账号管理**的**安全设置**页面获取登录账号的ID。
                 * @example `108398049688****`
                 */
                AccountId: string;
                /**
                 * 实例的网络类型。
                 * @example `VPC`
                 */
                NetworkType: string;
                /**
                 * 数据库引擎，取值：
                 * - **MySQL**
                 * - **Redis**
                 * - **PolarDBMySQL**
                 * @example `MySQL`
                 */
                Engine: string;
                /**
                 * 实例ID。
                 * @example `rm-bp10usoc1erj7****`
                 */
                InstanceId: string;
                /**
                 * 实例的节点ID。
                 * @example `rm-bp10usoc1erj7****`
                 */
                NodeId: string;
                /**
                 * 数据库引擎的版本号。
                 * @example `8.0`
                 */
                EngineVersion: string;
                /**
                 * 实例名称
                 * @example `test-01`
                 */
                InstanceAlias: string;
                /**
                 * CPU规格，例如返回8时代表CPU规格为8核。
                 * @example `8`
                 */
                Cpu: string;
                /**
                 * 数据库内存，单位为MB。
                 * @example `32768`
                 */
                Memory: number;
                /**
                 * 存储空间，单位为GB。
                 * @example `150`
                 */
                Storage: number;
                /**
                 * 实例的访问模式，取值：
                 * - **standard**：标准访问模式。
                 * - **safe**：数据库代理模式。
                 * @example `standard`
                 */
                Category: string;
            };
            /**
             * 扣分详情。
             */
            ScoreMap: any;
            /**
             * 任务的创建时间，格式为Unix时间戳，单位为毫秒。
             * @example `1603247192000`
             */
            GmtCreate: number;
            /**
             * 巡检得分。
             * @example `100`
             */
            Score: number;
            /**
             * 自治功能开启情况。
             */
            AutoFunction: {
                /**
                 * 事件订阅：
                 * - **0**：关闭。
                 * - **1**：开启。
                 * - **2**：不支持。
                 * @example `0`
                 */
                EventSubscription: number;
                /**
                 * 自动索引创建和删除：
                 * - **0**：关闭。
                 * - **1**：开启。
                 * - **2**：不支持。
                 * @example `2`
                 */
                AutoIndex: number;
                /**
                 * 自动限流：
                 * - **0**：关闭。
                 * - **1**：开启。
                 * - **2**：不支持。
                 * @example `2`
                 */
                AutoLimitedSql: number;
                /**
                 * 空间碎片自动回收：
                 * - **0**：关闭。
                 * - **1**：开启。
                 * - **2**：不支持。
                 * @example `0`
                 */
                AutoResourceOptimize: number;
                /**
                 * 自动弹性伸缩：
                 * - **0**：关闭。
                 * - **1**：开启。
                 * - **2**：不支持。
                 * @example `0`
                 */
                AutoScale: number;
            };
            /**
             * DAS企业版：
             * - **0**：关闭。
             * - **1**：开启。
             * - **2**：不支持。
             * @example `0`
             */
            EnableDasPro: number;
            /**
             * 巡检任务状态：
             * - **0**：等待执行。
             * - **1**：正在执行。
             * - **2**：巡检完成。
             * @example `2`
             */
            State: number;
            /**
             * 巡检任务发起类型：
             * - **0**：自动。
             * - **1**：手动。
             * @example `0`
             */
            TaskType: number;
        }[];
        /**
         * 页码，取值大于0且不超过Integer数据类型的最大值，默认值为1。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页最大记录数，默认值为10。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `4`
         */
        Total: number;
    };
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
