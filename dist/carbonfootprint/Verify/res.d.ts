export interface VerifyResponse {
    /**
     * The request ID.
     * @example `49857457-0425-545D-A7A2-9632B43BE2CE`
     */
    RequestId: string;
    /**
     * The data records.
     */
    Data: {
        /**
         * The error code.
         * @example `200`
         */
        code: string;
        /**
         * The error message.
         * @example `success`
         */
        message: string;
        /**
         * The IDs of the returned Alibaba Cloud accounts that have the required permissions.
         */
        AllowedUids: string[];
        /**
         * Resource directory account type. 0: not connected, 1: RD member account, 2: RD delegated administrator, 3: RD master administrator
         * @example `0`
         */
        accountType: number;
        /**
         * Whether multi-account management is enabled for the current Alibaba Cloud account. 0:no, 1:yes
         * @example `0`
         */
        multiAccountsAllow: number;
        /**
         * A list of all Alibaba Cloud accounts in the resource directory that you have permission to view (returned only when multi-account management is enabled).
         */
        allMultiAccountUids: {
            /**
             * The ID of Alibaba Cloud account.
             * @example `1673123142778211`
             */
            accountId: string;
            /**
             * The username of Alibaba Cloud account.
             * @example `test_account`
             */
            displayName: string;
        }[];
    };
}
