export interface UpdateRichTextResponse {
    /**
     * Id of the request
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 富文本id
         * @example `12`
         */
        id: number;
    };
}
