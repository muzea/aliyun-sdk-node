export interface UpdateAppInstanceGroupImageRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 交付组ID。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
    /**
     * 应用镜像ID，可从无影云应用控制台的镜像管理页面获取。
     * @example `img-8z4nztpaqvay4****`
     */
    "AppCenterImageId": string;
    /**
     * 交付组所属的地域ID。关于支持的地域详情，请参见[使用限制](https://help.aliyun.com/document_detail/426036.html)。
     * @example `cn-hangzhou`
     */
    "BizRegionId": string;
}
