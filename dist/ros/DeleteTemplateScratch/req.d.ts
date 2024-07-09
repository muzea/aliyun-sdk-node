export interface DeleteTemplateScratchRequest {
    /**
     * 资源场景所属的地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源场景ID。
     * 您可以通过调用[ListTemplateScratches - 查询资源场景列表](~~610832~~)接口查看资源场景ID。
     * @example `ts-4f83704400994409****`
     */
    "TemplateScratchId": string;
}
