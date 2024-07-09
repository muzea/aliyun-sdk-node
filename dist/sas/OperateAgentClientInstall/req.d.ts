export interface OperateAgentClientInstallRequest {
    /**
     * 要安装云安全中心Agent的服务器实例的ID列表，多个实例ID之间使用半角逗号（,）分隔。
     * > **InstanceIds**、**Uuids**这两个参数二选一，必须设置一个，才可以成功调用本接口，如果选择**InstanceIds**，则**Region**和**Os**必填。
     * @example `i-uf6j8vq9l4r5ntht****`
     */
    "InstanceIds"?: string;
    /**
     * 要安装的服务器的UUID列表，多个UUID之间使用半角逗号（,）分隔。
     * > **InstanceIds**、**Uuids**这两个参数二选一，必须设置一个，才可以成功调用本接口。
     * @example `1587bedb-fdb4-48c4-9330-************`
     */
    "Uuids"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 机器所在地域，包括但不限于如下地域：
     * - cn-hangzhou：杭州
     * - cn-beijing：北京
     * - cn-shanghai：上海
     * - cn-zhangjiakou：张家口
     * - cn-shenzhen：深圳
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 实例的操作系统。取值：
     * - **linux**：linux
     * - **windows**：windows
     * @example `linux`
     */
    "Os"?: string;
}
