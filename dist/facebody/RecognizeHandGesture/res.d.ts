export interface RecognizeHandGestureResponse {
    /**
     * 请求ID。
     * @example `99AC4489-693D-4DF1-8BB7-7451DD71A16E`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 手势类型。
         * - bg：无法识别的手势
         * - ok：确认
         * - palm：手掌
         * - left：握拳且大拇指向左
         * - right：握拳且大拇指向右
         * - good：点赞（即握拳且大拇指向上）
         * - mute：噤声（将食指放在嘴上即被识别为噤声）
         * - down：握拳且大拇指向下
         * @example `right`
         */
        Type: string;
        /**
         * 手势在图像中检测框的左上角X坐标。
         * @example `237`
         */
        X: number;
        /**
         * 手势在图像中检测的左上角Y坐标。
         * @example `216`
         */
        Y: number;
        /**
         * 手势在图像中检测框的宽度。
         * @example `46`
         */
        Width: number;
        /**
         * 手势在图像中检测框的高度。
         * @example `53`
         */
        Height: number;
        /**
         * 识别置信度，范围0~1。
         * @example `0.921875`
         */
        Score: number;
    };
}
