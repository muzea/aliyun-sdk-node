export interface CreateInstanceRequest {
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 数据集加速实例名称，格式如下：
         * - 长度限制为64个字符。
         * - 如果传入值为空（包含空字符串），系统会使用Uuid字段的值作为默认名称。
         * @example `acc_instance_1`
         */
        Name: string;
        /**
         * 数据集加速实例的描述与解释。
         * 长度限制为1024个字符。
         * @example `xgboost数据集加速实例`
         */
        Description: string;
        /**
         * 数据集加速实例的类型，取值如下：
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
             * 长度限制为64个字符。
             * @example `dataset_version`
             */
            Key: string;
            /**
             * 标签的值。
             * 长度限制为64个字符。
             * @example `v0.1.0`
             */
            Value: string;
        }[];
        /**
         * 数据集加速实例的付费类型，取值如下：
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
         * 数据集加速实例的最大加速槽个数。
         * @example `20`
         */
        MaxSlot: string;
        /**
         *
         * @example `20`
         */
        MaxEndpoint: string;
        /**
         *
         * @example `OSS`
         */
        StorageType: string;
        /**
         *
         * @example `Ecs`
         */
        ProviderType: string;
    };
}
