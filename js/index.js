/**
 * Created by guang on 2018/10/26.
 */
var vm = new Vue({
    el: '#main',
    data:{
        imgSrc: undefined,
        isCheck: true
    },
    methods:{
        deleteImg: function () {
            setTimeout(function() {
                vm.imgSrc = undefined;
            },1)
        }
    }
})