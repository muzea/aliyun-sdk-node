export interface ListSharedResourcesResponse {
    /**
     * 当请求的返回结果被截断时，您可以使用NextToken再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cm****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `04677DCA-7C33-464B-8811-1B1DA3C3D197`
     */
    RequestId: string;
    /**
     * 共享资源信息。
     */
    SharedResources: {
        /**
         * 更新关联资源的时间。
         * @example `2020-12-07T07:39:02.921Z`
         */
        UpdateTime: string;
        /**
         * 共享资源类型。
         * 支持共享的资源类型，请参见[支持资源共享的云服务](~~450526~~)。
         * @example `VSwitch`
         */
        ResourceType: string;
        /**
         * 关联资源的时间。
         * @example `2020-12-07T07:39:02.921Z`
         */
        CreateTime: string;
        /**
         * 共享单元ID。
         * @example `rs-6GRmdD3X****`
         */
        ResourceShareId: string;
        /**
         * 共享资源ID。
         * @example `vsw-bp1upw03qyz8n7us9****`
         */
        ResourceId: string;
        /**
         * 共享资源状态。查询您共享的资源时不返回该参数，查询共享给您的资源时返回该参数。
         * 取值：
         * - Available：资源可用。
         * - ZonalResourceInaccessible：在当前可用区，资源不可用。
         * - LimitExceeded：配额超限，资源不可用。
         * - Unavailable：资源不可用。
         * @example `Available`
         */
        ResourceStatus: string;
        /**
         * 关联失败的原因。
         * @example `The reason for the association failure. `
         */
        ResourceStatusMessage: string;
    }[];
}
