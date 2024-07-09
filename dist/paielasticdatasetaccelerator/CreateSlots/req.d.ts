export interface CreateSlotsRequest {
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 数据集加速槽列表
         */
        Slots: {
            /**
             * 数据集加速槽所对应的数据集加速实例的唯一标识符。
             * @example `inst-my1tk3jggooi5uwks5`
             */
            InstanceId: string;
            /**
             * 数据集加速槽名称。
             * 长度限制为64 Unicode 字符。
             * @example `slot_1`
             */
            Name: string;
            /**
             * 数据集加速槽的描述与解释。
             * 长度限制为1024 Unicode 字符。
             * @example `xgboost数据集加速槽`
             */
            Description: string;
            /**
             * 用户为数据集加速槽添加的自定义标签。
             */
            Tags: {
                /**
                 * 标签的键值。
                 * 长度限制为 64 Unicode 字符。
                 * @example `dataset_version`
                 */
                Key: string;
                /**
                 * v0.1.0	标签的值。
                 * 长度限制为 64 Unicode 字符。
                 * @example `v0.1.0`
                 */
                Value: string;
            }[];
            /**
             * 数据集加速槽的生命周期。
             */
            LifeCycle: any;
            IoType: string;
            /**
             * 数据集加速槽的数据存储类型。
             * OSS：OSS文件存储
             * NAS：NAS文件存储
             * @example `OSS`
             */
            StorageType: string;
            /**
             * 数据集加速槽的数据的资源标识符，数据类型不同存在不同格式。
             * @example `oss://pai-vision-data-hz2.oss-cn-hangzhou-internal.aliyuncs.com/data/VOCdevkit/VOC2007/ImageSets/Main/val.txt`
             */
            StorageUri: string;
            /**
             * 数据集加速槽的最大容量。
             * 输入字符串的格式需要满足以下规范：Quantity
             * @example `30.0G`
             */
            Capacity: string;
            /**
             * 创建数据集加速槽时，同时挂载的数据集加速槽挂载点Id的列表，以逗号分隔。
             * @example `end-my1tk3jggooi5uwks5,end-n69468yvjz8d12as7d,end-tga4omjrepklkg1onn`
             */
            EndpointIds: string;
        }[];
        /**
         * 是否对此次创建请求执行预检。
         * 预检操作会帮助您检查参数有效性、校验库存等，并不会实际创建实例，也不会产生费用。
         * 取值：
         * - true：发送检查请求，不会创建实例。
         * - false（默认）：发送正常请求，通过检查后直接创建实例。
         * @example `true`
         */
        DryRun: boolean;
    };
}
