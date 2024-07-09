export interface DescribeInstanceResponse {
    /**
     * 请求ID。
     * @example `A731A84D-55C9-44F7-99BB-E1CF0CF1****`
     */
    RequestId: string;
    /**
     * 数据集加速实例的创建者的Uid，在阿里云内为RAM用户ID（阿里云账号创建则直接为阿里云账号ID）。
     * @example `27606534679741****`
     */
    UserId: string;
    /**
     * 数据集加速实例资源拥有者的Uid，在阿里云内为阿里云账号ID。
     * @example `155770209819****`
     */
    OwnerId: string;
    /**
     * 数据集加速实例创建的时间。格式使用ISO8601（RFC3339）。
     * @example `2014-10-02T15:01:23Z`
     */
    GmtCreateTime: string;
    /**
     * 数据集加速实例最后更新的时间。格式使用ISO8601（RFC3339）。
     * @example `2014-10-02T15:01:23Z`
     */
    GmtModifiedTime: string;
    /**
     * 数据集加速实例的唯一标识符。
     * @example `inst-my1tk3jggooi5u****`
     */
    Uuid: string;
    /**
     * 数据集加速实例名称。
     * @example `acc_instance_1`
     */
    Name: string;
    /**
     * 数据集加速实例的描述与解释。
     * @example `xgboost数据集加速实例`
     */
    Description: string;
    /**
     * 数据集加速实例的类型，可能值：
     * - basic：基础版。
     * - enhanced：增强版。
     * @example `basic`
     */
    Type: string;
    /**
     * 用户为数据集加速实例添加的自定义标签。
     */
    Tags: {
        /**
         * 标签的键值。
         * 长度限制为64Unicode字符。
         * @example `dataset_version`
         */
        Key: string;
        /**
         * 标签的值。
         * 长度限制为64Unicode字符。
         * @example `v0.1.0`
         */
        Value: string;
    }[];
    /**
     * 数据集加速实例的付费类型，可能值：
     * - PayAsYouGo：后付费（按量付费）。
     * - Subscription：预付费（包年包月）。
     * @example `PayAsYouGo`
     */
    PaymentType: string;
    /**
     * 数据集加速实例的最大容量。
     * 输入字符串的格式需要满足以下规范：[Quantity](https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/common-definitions/quantity/)。
     * @example `30.0G`
     */
    Capacity: string;
    /**
     * 数据集加速实例的读写类型。
     * @example `readonly`
     */
    IoType: string;
    /**
     * 数据集加速实例的最大加速槽个数。
     * @example `20`
     */
    MaxSlot: number;
    /**
     * 数据集加速实例的最大挂载点个数。
     */
    MaxEndpoint: number;
    /**
     * 数据集加速实例的存储类型。
     * @example `OSS`
     */
    StorageType: string;
    /**
     * 数据集加速实例的资源提供者类型。
     * @example `Ecs`
     */
    ProviderType: string;
    /**
     * 数据集加速实例状态。
     */
    Status: any;
}
