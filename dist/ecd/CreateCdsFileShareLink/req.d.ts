export interface CreateCdsFileShareLinkRequest {
    /**
     * 企业网盘ID。
     * @example `cn-shanghai+cds-135515****`
     */
    "CdsId": string;
    /**
     * 提取码长度范围：0\~64字节。不设置或者设置为空，表示无提取码，在获取分享令牌的时候也不用设置提取码参数。 要求使用ASCII可见字符。
     * @example `12345678`
     */
    "SharePwd"?: string;
    /**
     * 失效时间点。 RFC3339格式。 当取值为空时，表示永久有效。
     * @example `2020-06-28T11:33:00.000+08:00`
     */
    "Expiration"?: string;
    /**
     * 分享描述。 长度范围为0\~1024个字符。
     * @example `SharedFile`
     */
    "Description"?: string;
    /**
     * 分享名。 如果未设置，默认使用`file_id_list`中的第一个ID对应的文件名。 长度范围为0\~128个字符。
     * @example `view.txt`
     */
    "ShareName"?: string;
    /**
     * 是否禁止预览分享中的文件。
     * @example `false`
     */
    "DisablePreview"?: boolean;
    /**
     * 是否禁止转存分享中的文件。
     * @example `false`
     */
    "DisableSave"?: boolean;
    /**
     * 是否禁止下载分享中的文件。
     * @example `false`
     */
    "DisableDownload"?: boolean;
    /**
     * 分享预览次数限制。取值范围为整数，取值为0时表示不限制。
     * @example `100`
     */
    "PreviewLimit"?: number;
    /**
     * 分享转存次数限制。取值范围为整数，取值为0时表示不限制。
     * @example `100`
     */
    "SaveLimit"?: number;
    /**
     * 分享下载次数限制。取值范围为整数，取值为0时表示不限制。
     * @example `100`
     */
    "DownloadLimit"?: number;
    /**
     * 使用网盘的用户ID。
     * @example `alice`
     */
    "EndUserId"?: string;
    /**
     * 文件ID列表。
     */
    "FileIds"?: string[];
    /**
     * 团队空间ID。
     * @example `cg-i1ruuudp92qpj****`
     */
    "GroupId"?: string;
}
