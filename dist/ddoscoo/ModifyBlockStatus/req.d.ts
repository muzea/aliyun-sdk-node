export interface ModifyBlockStatusRequest {
    /**
     * 设置近源流量压制的状态。取值：
     * - **do**：表示开启近源流量压制。
     * - **undo**：表示关闭近源流量压制。
     * @example `do`
     */
    "Status": string;
    /**
     * 要封禁的时长。取值范围：**15**~**43200**，单位：分钟。
     * > **Status**为**do**（表示开启近源流量压制）时，该参数必选。
     * @example `60`
     */
    "Duration"?: number;
    /**
     * 要操作的DDoS高防（新BGP）实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID信息。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "InstanceId": string;
    /**
     * 要封禁的线路列表。
     * @example `ct`
     */
    "Lines": string[];
}
