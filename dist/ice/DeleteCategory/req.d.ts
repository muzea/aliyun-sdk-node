export interface DeleteCategoryRequest {
    /**
     * 分类ID。可通过以下方式获取：
     * - 登录[IMS控制台](https://ims.console.aliyun.com)，选择 **媒资管理** > **分类管理**查看分类ID。
     * - 通过创建分类接口创建分类时，分类ID为返回参数CateId的值。
     * - 通过获取分类接口查询分类时，为请求后返回参数CateId的值。
     * @example `46`
     */
    "CateId": number;
}
