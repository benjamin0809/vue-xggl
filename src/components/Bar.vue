 <template>
    <div>
        <p>Bar</p>
        <el-row>
            <el-button type="primary" @click="testAxios">{{lastname}}</el-button>
        </el-row>
    </div>
</template>

<script>
import { loginByAccount } from '@/api/login'

export default {
  name: 'test axios',
  data () {
    return {
      lastname: 'getUserName'
    }
  },
  methods: {
    testAxios () {
      loginByAccount('benjamin', '123').then((data) => {
        console.log(data)
        this.lastname = data['username']
      })
    }
  }
}
</script>
