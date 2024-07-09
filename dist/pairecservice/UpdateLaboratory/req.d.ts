export interface UpdateLaboratoryRequest {
    /**
     * 实验室ID，可通过接口ListLaboratories获取。
     * @example `3`
     */
    "LaboratoryId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 实验室名称。
         * @example `laboratory1`
         */
        Name: string;
        /**
         * 实验室介绍。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 调试用户（需为阿里云账户主账号/子账号uid），多个用户需通过逗号作间隔。
         * @example `1124512470******,1124512471******,1124512472******`
         */
        DebugUsers: string;
        /**
         * 调试人群ID。
         * @example `3`
         */
        DebugCrowdId: string;
        /**
         * 分桶数量。
         * @example `24`
         */
        BucketCount: number;
        /**
         * 分配桶号。
         * @example `1,2,3,10-20`
         */
        Buckets: string;
        /**
         * 分桶方式。
         * ● Uid-UID分桶（默认）
         * ● UidHash-UID哈希
         * ● Filter-过滤条件分桶
         * @example `Filter`
         */
        BucketType: string;
        /**
         * 过滤条件。
         * @example `filter=xxx`
         */
        Filter: string;
        /**
         * 实验室类型。
         * ● Base
         * ● NonBase
         * @example `Base`
         */
        Type: string;
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-test1`
         */
        InstanceId: string;
        /**
         * 运行环境
         * ● Daily-日常环境
         * ● Pre-预发环境
         * ● Prod-生产环境
         * @example `Daily`
         */
        Environment: string;
    };
}
