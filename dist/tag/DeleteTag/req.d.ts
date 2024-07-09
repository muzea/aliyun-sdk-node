export interface DeleteTagRequest {
    /**
     * 地域ID。
     * > 仅支持`cn-hangzhou`地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签键。
     * 当标签键下没有任何标签值时，可以仅设置`Key`，删除该标签键。否则，请同时设置`Key`和`Value`，删除指定的预置标签。
     * @example `Environment`
     */
    "Key": string;
    /**
     * 标签值。
     * @example `test`
     */
    "Value"?: string;
}
