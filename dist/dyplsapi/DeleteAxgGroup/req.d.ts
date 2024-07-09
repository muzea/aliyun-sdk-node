export interface DeleteAxgGroupRequest {
    /**
     * 号码池Key。
     * 在号码隐私保护控制台，[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面获取**号码池Key**。
     * @example `FC2235****`
     */
    "PoolKey": string;
    /**
     * AXG中的G组ID，即GID。
     * - 登录号码隐私保护控制台，在[号码池管理](https://dyplsnext.console.aliyun.com/number-pool)页面筛选出**AXG隐私号**，单击**G号码组管理**即可查看所有G号码组的GID。
     * - 如果G号码组是通过接口[CreateAxgGroup](~~110250~~)创建的，则接口的返回参数**GroupID**就是此处的请求参数**GroupID**。
     * @example `200001234****`
     */
    "GroupId": number;
}
