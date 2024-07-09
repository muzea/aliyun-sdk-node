export interface RecognizeEnglishResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"content":"2:1.*5RI, 99034n&; 2.4079#17; 3.48MM; 4.AMF*E9P7EExg条. 0 O Denr_Ms Jenkins, Im_Li Hun ya_student_of your_English_c loss. Im_writing_tn_ask_for yow r help.The_ sumer Vacation_ _is_.coming.And_I_woud_like.to sply for a port-time_ _jo) _at a for i en com zany. in_ my a ity. I_hoe just_completed_my_ayp lic n tion_ ptter on d__ yes ume.How eyer, I/m_not_sure that_the len guo ge_and_fo mot_ore_right.I_know_you hae a_very pusy schedule, put_Id_be very grn te ful_if you_could_take_ s0me time_to 90_ though_them_and_ make necce55ary_chong es looking for word_to youre orly_reply.And I'd_e_re olly_t honk ful. You Ys- Li huo. 6121at1#x ","height":2340,"orgHeight":2340,"orgWidth":1654,"prism_version":"1.0.9","prism_wnum":32,"prism_wordsInfo":[{"angle":-89,"direction":0,"height":960,"pos":[{"x":475,"y":225},{"x":1434,"y":225},{"x":1434,"y":260},{"x":475,"y":260}],"prob":67,"width":34,"word":"2：1.*5RI， 99034n&； 2.4079#17； 3.48MM； 4.AMF*E9P7EExg条.","x":937,"y":-237}],"width":1654}`
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
