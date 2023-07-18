import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
// routes
import { fCurrency } from '../../utils/formatNumber';
// components
import Label from '../../components/Label';
import Image from '../../components/Image';
import { ColorPreview } from '../../components/color-utils';

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name , price , color , images} = product;

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>

        {/* {images?.map((image, index) => (
          <Image alt={name} src={image.image}  ratio="1/1" />
      ))} */}

      <Image alt={name} src={images.image}  ratio="1/1" />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={color} />
      

          <Stack direction="row" spacing={0.5}>
            <Typography variant="subtitle1">{fCurrency(price)}</Typography>
          </Stack> 
        </Stack>
      </Stack>
    </Card>
  );
}
