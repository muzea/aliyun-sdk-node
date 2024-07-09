export interface GeneratePictureLinkRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * keys
         */
        keys: string[];
        /**
         * 故障id
         * @example `50002020`
         */
        problemId: number;
    };
}
