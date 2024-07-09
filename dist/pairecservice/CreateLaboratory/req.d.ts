export interface CreateLaboratoryRequest {
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 场景ID，可通过接口ListScenes获取。
         * @example `3`
         */
        SceneId: string;
        /**
         * 实验室名称。
         * @example `laboratory1`
         */
        Name: string;
        /**
         * 实验室描述。
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
         * 分桶方式
         * ● UidHash-UID哈希（默认）
         * ● Uid-UID分桶
         * ● Filter-过滤条件分桶
         * @example `UidHash`
         */
        BucketType: string;
        /**
         * 过滤条件。
         * @example `filter=xxx`
         */
        Filter: string;
        /**
         * 运行环境
         * ● Daily-日常环境
         * ● Pre-预发环境
         * ● Prod-生产环
         * @example `Daily`
         */
        Environment: string;
        /**
         * 实验室类型
         * ● Base
         * ● NonBase
         * @example `Base`
         */
        Type: string;
        /**
         * 实例ID，可通过接口ListInstances获取。
         * @example `pairec-cn-abcdefg1234`
         */
        InstanceId: string;
    };
}
