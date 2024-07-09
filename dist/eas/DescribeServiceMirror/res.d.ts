export interface DescribeServiceMirrorResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务名称。
     * @example `foo`
     */
    ServiceName: string;
    /**
     * 设置流量镜像对服务列表。
     * @example `foo2,foo3`
     */
    Target: string;
    /**
     * 流量比例，取值范围0~100。
     * @example `50`
     */
    Ratio: string;
}
