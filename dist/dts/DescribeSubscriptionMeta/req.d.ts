export interface DescribeSubscriptionMetaRequest {
    /**
     * 消费组ID。
     * @example `z38m91gg2******`
     */
    "Sid": string;
    /**
     * 分布式订阅的实例ID。
     * > 本参数为必填参数。
     * @example `dtsbr4m9luv2******`
     */
    "DtsInstanceId"?: string;
    /**
     * 分布式订阅任务下所有的子订阅任务ID。多个子订阅任务ID间以英文逗号（,）分隔。
     * > 本参数和参数**Topics**两者中至少传入一个。推荐填入本参数。
     * @example `["zsls58agp6f****"]`
     */
    "SubMigrationJobIds"?: any;
    /**
     * 分布式订阅任务下所有的订阅Topic。多个订阅Topic间以英文逗号（,）分隔。
     * > 本参数和参数**SubMigrationJobIds**两者中至少传入一个。推荐填入参数**SubMigrationJobIds**。
     * @example `["rm_bp15jj3qi1p8f****"]`
     */
    "Topics"?: any;
    /**
     * 订阅实例所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
