export interface ListPwnedPasswordsRequest {
    /**
     * 密码SHA1Hash值前六位
     * @example `000000`
     */
    "PrefixHexPasswordSha1Hash": string;
}
