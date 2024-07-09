export interface GetLaboratoryResponse {
    /**
     * Id of the request
     * @example `1C0898E5-9220-5443-B2D9-445FF0688215`
     */
    RequestId: string;
    /**
     * 场景ID。
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
     * 调试用户。
     * @example `user1,user2,user3`
     */
    DebugUsers: string;
    /**
     * 调试人群ID。
     * @example `3`
     */
    DebugCrowdId: string;
    /**
     * 分桶数量。
     * @example `100`
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
     * 运行环境
     * ● Daily-日常环境
     * ● Pre-预发环境
     * ● Prod-生产环境
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
     * 状态。
     * ● Offline-未上线。
     * ● Online-已上线。
     * @example `Offline`
     */
    Status: string;
    /**
     * 人群ID。
     * @example `3`
     */
    CrowdId: string;
}
