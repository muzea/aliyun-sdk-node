export interface DeleteSubnetResponse {
    /**
     * 业务码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A56F7D3C-8850-5AF4-A342-2D71C9A9D1CC`
     */
    RequestId: string;
    /**
     * 响应内容（当资源存在依赖资源时，会返回存在的依赖资源）
     * @example `{
          "nc": [
                {}
          ]
    }`
     */
    Content: any;
}
