export interface UpdateSlotRequest {
    /**
     * 数据集加速槽ID。如何获取数据集加速槽ID，请参见[ListSlots](~~467905~~)。
     * @example `slot-my1tk3jggooi5uwks5`
     */
    "SlotId": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 数据集加速槽名称。
         * 长度限制为64个字符。
         * @example `slot_1`
         */
        Name: string;
        /**
         * 数据集加速槽的描述与解释。
         * 长度限制为1024个字符。
         * @example `xgboost数据集加速槽`
         */
        Description: string;
        /**
         * 用户为数据集加速槽添加的自定义标签。
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
         * 数据集加速槽的数据存储类型，取值如下：
         * - OSS：OSS文件存储。
         * - NAS：NAS文件存储。
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
         * 输入字符串的格式需要满足以下规范：[Quantity](https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/common-definitions/quantity/) 。
         * @example `30.0G`
         */
        Capacity: string;
        /**
         * 数据集加速槽的生命周期。
         */
        LifeCycle: any;
    };
}
