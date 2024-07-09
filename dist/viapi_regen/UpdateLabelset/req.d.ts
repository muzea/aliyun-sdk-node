export interface UpdateLabelsetRequest {
    /**
     * 标注集ID。
     * @example `188`
     */
    "Id": number;
    /**
     * 标注集名称。
     * @example `test2`
     */
    "Name": string;
    /**
     * 用户标注文件OSS的路径。
     * @example `oss://regen-test-bucket/jhdtest/分割/标注/label.csv`
     */
    "UserOssUrl"?: string;
    /**
     * 标注集描述。
     * @example `test2`
     */
    "Description"?: string;
    /**
     * 文件路径。
     * @example `jhdtest/分割/标注/label.csv`
     */
    "ObjectKey"?: string;
    /**
     * 需要更新打标人时，使用标注系统进行标注，仅在`LabelType=USE_LABEL_SYSTEM`下生效。
     * @example `["123123434341","3423423424324"]`
     */
    "TagUserList"?: string;
}
