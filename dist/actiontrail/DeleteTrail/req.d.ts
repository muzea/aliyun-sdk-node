export interface DeleteTrailRequest {
    /**
     * 要删除的跟踪名称。
     * 长度为6～36个字符，必须以小写英文字母开头，可包含小写英文字母、数字、短划线（-）和下划线（_）。
     * > 同一个账号内跟踪名称不可重复。
     * @example `my-test`
     */
    "Name": string;
}
