export interface DescribeUnBlackholeCountResponse {
    /**
     * 本次请求的ID。
     * @example `232929FA-40B6-4C53-9476-EE335ABA44CD`
     */
    RequestId: string;
    /**
     * 黑洞解封总次数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 剩余的黑洞解封次数。
     * @example `5`
     */
    RemainCount: number;
}
