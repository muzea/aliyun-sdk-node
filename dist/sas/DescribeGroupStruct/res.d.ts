export interface DescribeGroupStructResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9FBC6E47-7508-58C9-9E76-528E118C****`
     */
    RequestId: string;
    /**
     * 资产分组的ID。
     * @example `958****`
     */
    GroupId: number;
    /**
     * 服务器分组名称。
     * @example `TestGroupName`
     */
    GroupName: string;
    /**
     * 服务器的数量。
     * @example `30`
     */
    MachineNum: number;
    /**
     * 排序序号。
     * @example `1`
     */
    GroupIndex: number;
    /**
     * 分组父节点。
     * @example `958****`
     */
    GroupFather: number;
    /**
     * 应用分组的级别。
     * @example `2`
     */
    GroupLevel: number;
    /**
     * 服务器分组类型。取值：
     * - **0**：默认分组
     * - **1**：其他分组
     * @example `0`
     */
    GroupFlag: number;
    /**
     * 下一级分组集合。
     */
    Groups: string[];
}
