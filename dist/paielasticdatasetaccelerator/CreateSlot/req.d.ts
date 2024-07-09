export interface CreateSlotRequest {
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 数据集加速槽所对应的数据集加速实例的唯一标识符。如何获取加速实例ID，请参见[ListInstances](~~467899~~)。
         * @example `inst-my1tk3jggooi5uwks5`
         */
        InstanceId: string;
        /**
         * 数据集加速槽名称。长度限制为64个字符。
         * @example `slot_1`
         */
        Name: string;
        /**
         * 数据集加速槽的描述与解释。长度限制为1024个字符。
         * @example `xgboost数据集加速槽`
         */
        Description: string;
        /**
         * 用户为数据集加速槽添加的自定义标签。
         */
        Tags: {
            /**
             * 标签的键值。长度限制为64个字符。
             * @example `dataset_version`
             */
            Key: string;
            /**
             * 标签的值。长度限制为 64 字符。
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
        IoType: string;
        /**
         * 创建数据集加速槽时，同时创建的挂载点列表。
         */
        Endpoints: {
            /**
             * 挂载点的名称。
             * 长度限制为64个字符。
             * 如果传入值为空（包含空字符串），系统会使用Uuid字段的值作为默认名称。
             * @example `endpoint-1`
             */
            Name: string;
            /**
             * 挂载点的网络类型，根据网络类型不同，下列中需要传入的参数也有所不同。
             * VPC：端点机器处于VPC网络。
             * @example `VPC`
             */
            Type: string;
            /**
             * 挂载点使用的专有网络 VPC ID。
             * @example `vpc-j6co2fcdsl1q0gnuc3ym3`
             */
            VpcId: string;
            /**
             * 挂载点使用的交换机vSwitch ID。
             * 该vSwitch需要属于传入的VPC。
             * @example `vsw-j6cmr00qjyrft6jo2mg7g`
             */
            VswitchId: string;
        }[];
        /**
         * 创建数据集加速槽时，同时挂载的数据集加速槽挂载点ID的列表，多个挂载点ID以半角逗号（,）分隔。
         * @example `end-my1tk3jggooi5uwks5,end-n69468yvjz8d12as7d,end-tga4omjrepklkg1onn`
         */
        EndpointIds: string;
    };
}
