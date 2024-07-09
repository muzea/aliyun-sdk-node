export interface GetUploadOssUrlRequest {
    /**
     * 作用类型（CREATE_PROJECT）。
     * @example `CREATE_PROJECT`
     */
    "Type": string;
    /**
     * 有效时长。默认 10 分钟内有效，设置范围为 1~30 分钟。
     * @example `10`
     */
    "EffectiveTimeMinutes"?: number;
}
