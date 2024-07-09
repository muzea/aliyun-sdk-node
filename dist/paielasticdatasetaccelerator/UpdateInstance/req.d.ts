export interface UpdateInstanceRequest {
    /**
     * 数据集加速实例ID。如何获取加速实例ID，请参见[ListInstances](~~467899~~)。
     * @example `inst-my1tk3jggooi5uwks5`
     */
    "InstanceId": string;
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 数据集加速实例名称，格式为：
         * - 长度限制为64Unicode字符。
         * - 如果传入值为空（包含空字符串），系统会使用Uuid字段的值作为默认名称。
         * @example `acc_instance_1`
         */
        Name: string;
        /**
         * 数据集加速实例的描述与解释。
         * 长度限制为1024Unicode字符。
         * @example `xgboost数据集加速实例`
         */
        Description: string;
        /**
         * 数据集加速实例的最大加速槽个数。
         * @example `20`
         */
        MaxSlot: string;
    };
}
