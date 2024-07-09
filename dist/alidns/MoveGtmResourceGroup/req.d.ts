export interface MoveGtmResourceGroupRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 资源id。
     * @example `rg-aekzzk7hx3*****`
     */
    "ResourceId": string;
    /**
     * 资源组ID。
     * @example `AgIDE1MA_XXX`
     */
    "NewResourceGroupId": string;
}
