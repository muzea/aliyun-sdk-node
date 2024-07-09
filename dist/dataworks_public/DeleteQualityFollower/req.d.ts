export interface DeleteQualityFollowerRequest {
    /**
     * 分区表达式所在的引擎或者数据源的名称。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据质量的规则配置页面获取名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 分区表达式的订阅关系ID。您可以调用[GetQualityFollower](~~174000~~)接口获取订阅关系ID。
     * @example `1234`
     */
    "FollowerId": number;
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks控制台，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId"?: number;
}
