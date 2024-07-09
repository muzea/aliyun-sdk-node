export interface GetServiceTemplateResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务模版ID。
     * @example `st-rbvg5wzlj****9ks92`
     */
    ServiceTemplateId: string;
    /**
     * 名称。
     * @example `stable_diffusion_aigc`
     */
    ServiceTemplateName: string;
    /**
     * 描述。
     * @example `stable diffusion 1.5`
     */
    ServiceTemplateDescription: string;
    /**
     * 创建时间。
     * @example `2021-01-30T12:51:33.028Z`
     */
    GmtCreateTime: string;
    /**
     * 最后更新时间。
     * @example `2021-01-30T12:51:33.028Z`
     */
    GmtModifiedTime: string;
    /**
     * 创建者ID。
     * @example `1234567890******`
     */
    UserId: string;
    /**
     * 云账号ID。
     * @example `1234567890******`
     */
    OwnerId: string;
    /**
     * 提供者。
     * @example `pai`
     */
    Provider: string;
    /**
     * 介绍文档。
     * @example `https://***.md`
     */
    ServiceTemplateDoc: string;
    /**
     * 标签列表。
     */
    Labels: any[];
    /**
     * 模版配置。
     * @example `{
          "processor": "tensorflow_gpu_1.12"
    }`
     */
    InferenceSpec: any;
}
