export interface RecognizeEduPaperStructedResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"figure":[{"type":"subject_bracket","x":1039,"y":2625,"w":124,"h":42,"box":{"x":0,"y":0,"w":0,"h":0,"angle":0},"points":[{"x":1039,"y":2625},{"x":1163,"y":2625},{"x":1163,"y":2667},{"x":1039,"y":2667}]}],"height":3442,"orgHeight":3442,"orgWidth":2377,"page_id":7,"page_title":"","part_info":[{"part_title":"选择题","pos_list":[[{"x":245,"y":3260},{"x":2235,"y":3265},{"x":2235,"y":3353},{"x":245,"y":3352}]],"subject_list":[{"index":0,"type":0,"prob":0,"text":"1.(疑难,★★☆)下列各组数据中,表示同一 时刻的是 ( ) A.前2s末、第2s末、第3s初 B.第1s末、第2s末、第3s末 C.前2s末、第2s末、前3s初 D.前2s初、第2s末、第3s初","pos_list":[[{"x":170,"y":417},{"x":1162,"y":416},{"x":1161,"y":757},{"x":170,"y":757}]],"element_list":[{"type":0,"text":"1.(疑难,★★☆)下列各组数据中,表示同一 时刻的是 ( )","pos_list":[[{"x":170,"y":417},{"x":1162,"y":416},{"x":1161,"y":520},{"x":170,"y":518}]],"content_list":[{"type":1,"prob":0,"string":"1.(疑难,★★☆)下列各组数据中,表示同一 时刻的是","option":"","pos":[{"x":170,"y":417},{"x":1131,"y":416},{"x":1131,"y":453},{"x":170,"y":454}]},{"type":1,"prob":0,"string":"( )","option":"","pos":[{"x":1033,"y":481},{"x":1162,"y":483},{"x":1161,"y":520},{"x":1033,"y":518}]}]},{"type":1,"text":"A.前2s末、第2s末、第3s初","pos_list":[[{"x":204,"y":541},{"x":746,"y":536},{"x":746,"y":572},{"x":204,"y":577}]],"content_list":[{"type":1,"prob":0,"string":"A.前2s末、第2s末、第3s初","option":"","pos":[{"x":204,"y":541},{"x":746,"y":536},{"x":746,"y":572},{"x":204,"y":577}]}]},{"type":1,"text":"B.第1s末、第2s末、第3s末","pos_list":[[{"x":205,"y":601},{"x":742,"y":596},{"x":743,"y":632},{"x":205,"y":637}]],"content_list":[{"type":1,"prob":0,"string":"B.第1s末、第2s末、第3s末","option":"","pos":[{"x":205,"y":601},{"x":742,"y":596},{"x":743,"y":632},{"x":205,"y":637}]}]},{"type":1,"text":"C.前2s末、第2s末、前3s初","pos_list":[[{"x":205,"y":660},{"x":743,"y":660},{"x":743,"y":696},{"x":205,"y":696}]],"content_list":[{"type":1,"prob":0,"string":"C.前2s末、第2s末、前3s初","option":"","pos":[{"x":205,"y":660},{"x":743,"y":660},{"x":743,"y":696},{"x":205,"y":696}]}]},{"type":1,"text":"D.前2s初、第2s末、第3s初","pos_list":[[{"x":205,"y":721},{"x":746,"y":721},{"x":746,"y":757},{"x":205,"y":757}]],"content_list":[{"type":1,"prob":0,"string":"D.前2s初、第2s末、第3s初","option":"","pos":[{"x":205,"y":721},{"x":746,"y":721},{"x":746,"y":757},{"x":205,"y":757}]}]}]}]}],"prism_version":"1.0.9","prism_wnum":0,"prism_wordsInfo":[],"width":2377}`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
