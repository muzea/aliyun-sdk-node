export interface GenerateProblemPictureLinkRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * oss key
         */
        keys: string[];
        /**
         * 故障id
         * @example `50002021`
         */
        problemId: string;
    };
}
