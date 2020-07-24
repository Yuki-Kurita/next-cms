import SearchAppBar from '../src/components/SearchAppBar'
import MediaCard from '../src/components/MediaCard'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Index = () => {
  return (
    <>
    <SearchAppBar/>
    <div className="articles">
      <Grid container spacing={3}>
        {/* 記事領域 */}
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <MediaCard/>
            </Grid>
          </Grid>
        </Grid>
        {/* タグ領域 */}
        <Grid item xs={12} sm={4}>
          ここにタグを入れる
        </Grid>
      </Grid>
      <style jsx>{`
        .articles {
          margin-top: 2em;
          margin-left: 2em;
          flex-grow: 1;
        }
      `}</style>
    </div>
    </>
  )
}

export default Index;